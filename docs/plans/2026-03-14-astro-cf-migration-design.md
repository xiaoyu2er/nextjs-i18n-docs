# 迁移到 Astro + Starlight + CF Workers 设计文档

## 背景

当前项目使用 Next.js + fumadocs-mdx + next-intl，部署在 Vercel（9 个语言 = 9 个独立项目）。

### 迁移动机
1. **成本** — 9 个 Vercel 项目费用高
2. **性能** — 全球 edge 分发，尤其非英语用户
3. **基础设施统一** — 全部迁移到 Cloudflare
4. **控制** — 缓存、路由、部署管线完全自主

### 为什么不能继续用 Next.js + fumadocs

经过 POC 验证，fumadocs-mdx 与 CF Workers 存在根本不兼容：

| fumadocs 运行时操作 | CF Workers 限制 |
|---|---|
| `new Function()` 编译 MDX | ❌ EvalError: Code generation from strings disallowed |
| `WebAssembly.instantiate()` shiki | ❌ Wasm code generation disallowed |
| `fs.readFileSync` 读取 MDX | ❌ fs.readFileSync is not implemented |

这些限制在 `async: true` 和 `async: false` 两种模式下都无法绕过。

### 为什么选 Astro + Starlight

POC 已验证（线上地址：https://nextjs-i18n-astro-poc.pages.dev/）：

- ✅ MDX 在 build time 完全编译，runtime 零 eval/WASM/fs 依赖
- ✅ Expressive Code 内置语法高亮（build time，不需要 shiki WASM）
- ✅ Sidebar、TOC、搜索、暗色模式开箱即用
- ✅ i18n 内置支持，语言切换正常
- ✅ 部署到 CF Workers + Static Assets，零限制
- ✅ 完整复杂页面（10KB MDX, 42 个代码块, 自定义组件）渲染正确

### 参考架构：Cloudflare Docs (developers.cloudflare.com)

Cloudflare 自己的文档站使用完全相同的技术栈：
- **Astro + Starlight 0.37.6**
- **CF Workers + Static Assets**（不是 CF Pages）
- **Algolia DocSearch**（remote 搜索，零本地索引文件）
- **~8,018 MDX 文件**，单语言
- **Worker 处理重定向、/index.md API、LLM 友好输出**

---

## 技术架构

```
┌─────────────────────────────────────────┐
│ GitHub Repo                             │
│                                         │
│  content/{locale}/docs/**/*.mdx  (现有)  │
│  content/{locale}/blog/**/*.mdx  (现有)  │
│  content/{locale}/learn/**/*.mdx (现有)  │
│                                         │
│  packages/translate/  (翻译管线, 不变)    │
│  packages/crawler/    (爬虫, 不变)        │
└─────────────────────────────────────────┘
              ↓ bun build (Astro)
┌─────────────────────────────────────────┐
│ Astro + Starlight                       │
│                                         │
│  - 所有 MDX build time 编译为静态 HTML    │
│  - Expressive Code 语法高亮              │
│  - 9 语言 i18n (root=en, path prefix)   │
│  - 单次构建, 所有语言                     │
│  - 产出: dist/ (静态文件)                 │
└─────────────────────────────────────────┘
              ↓ wrangler deploy
┌─────────────────────────────────────────┐
│ CF Worker + Static Assets               │
│                                         │
│  [assets]                               │
│    directory = "./dist"                  │
│    binding = "ASSETS"                    │
│                                         │
│  Worker 职责:                             │
│    - 静态文件分发 (ASSETS binding)         │
│    - 301 重定向 (旧子域名 → 新路径)        │
│    - /index.md API (LLM 友好输出)         │
│    - 未来: Service Bindings (Microfrontends) │
│                                         │
│  Paid plan: 100,000 文件限制              │
│  全球 300+ edge 节点                      │
└─────────────────────────────────────────┘
```

### 关键变化

| 项目 | 现在 (Next.js) | 迁移后 (Astro) |
|---|---|---|
| 框架 | Next.js 15 | Astro 5 + Starlight |
| 包管理器 | pnpm | bun |
| MDX 编译 | fumadocs-mdx (runtime) | Astro MDX (build time) |
| 代码高亮 | shiki (WASM) | Expressive Code (build time) |
| i18n | next-intl + LOCALE env var × 9 builds | Starlight i18n (内置, 1 次 build) |
| 搜索 | Orama Cloud | Orama Cloud (保持不变) |
| 部署 | Vercel × 9 项目 | CF Worker × 1 |
| 构建 | 9 次 build (每语言一次) | 1 次 build (所有语言) |
| 翻译管线 | 不变 | 不变 |

---

## 部署架构：CF Workers + Static Assets

与 Cloudflare Docs 相同的部署方式：

```toml
# wrangler.toml
name = "nextjs-i18n-docs"
main = "./worker/index.ts"
compatibility_date = "2025-03-14"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = "./dist"
binding = "ASSETS"
not_found_handling = "404-page"
run_worker_first = true
```

Worker 代码处理：
1. **重定向** — 旧子域名 URL → 新路径前缀 URL
2. **/index.md 端点** — 将 HTML 转为 Markdown（LLM 友好）
3. **ASSETS binding** — 返回 Astro 构建的静态文件

### 文件数量与限制

| 场景 | HTML 文件 | 总文件数 | Paid (100K) 限制 |
|---|---|---|---|
| 当前 9 语言 × 1,118 | 10,062 | ~10,072 | ✅ 10% |
| 2x 增长 | 20,124 | ~20,134 | ✅ 20% |
| 3x 增长 | 30,186 | ~30,196 | ✅ 30% |
| 10x 增长 | 100,620 | ~100,630 | ⚠️ 边界 |

搜索使用 Orama Cloud (remote)，禁用 Pagefind，不产生本地索引文件。

### Microfrontends 版本分层部署

v13/v14 冻结文档占 53% 文件但几乎不更新。使用 CF Microfrontends 分层部署，日常构建时间从 7min 降到 ~3.3min。

参考：https://developers.cloudflare.com/workers/framework-guides/web-apps/microfrontends/

```
Router Worker (nextjs.im)
  │
  │ 1. 提取 locale 前缀 (zh-hans, ja, etc.)
  │ 2. 用剩余 path 匹配版本路由
  │ 3. 转发完整原始路径到目标 Worker
  │
  ├── /docs/13/*  →  V13 Worker  (独立部署, 几乎不更新)
  ├── /docs/14/*  →  V14 Worker  (独立部署, 几乎不更新)
  └── /*          →  Latest Worker (日常更新)
```

**多语言 + 多版本路由示例：**

```
请求: /zh-hans/docs/13/01-getting-started/01-installation/
  ↓ Router Worker
  ↓ Strip locale → path = /docs/13/01-getting-started/01-installation/
  ↓ 匹配 /docs/13 → V13 Worker
  ↓ 转发原始完整路径 /zh-hans/docs/13/... 给 V13 Worker
  ↓ V13 Worker 自己处理多语言渲染
```

Router Worker 配置：
```json
{
  "routes": [
    { "path": "/docs/13", "binding": "V13_DOCS" },
    { "path": "/docs/14", "binding": "V14_DOCS" },
    { "path": "/", "binding": "LATEST" }
  ]
}
```

Router Worker 路由逻辑（伪代码）：
```ts
const LOCALES = ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];

function route(request) {
  const url = new URL(request.url);
  let path = url.pathname;

  // 1. Strip locale prefix for route matching
  const segments = path.split('/').filter(Boolean);
  if (LOCALES.includes(segments[0])) {
    path = '/' + segments.slice(1).join('/');
  }

  // 2. Match version routes
  if (path.startsWith('/docs/13')) return env.V13_DOCS.fetch(request);
  if (path.startsWith('/docs/14')) return env.V14_DOCS.fetch(request);

  // 3. Default to latest
  return env.LATEST.fetch(request);
}
```

**构建性能对比：**

| 场景 | 文件数 | 构建时间 | 频率 |
|---|---|---|---|
| Latest (01-app + 02-pages + learn + blog) | ~4,754 | ~3.3 min | 每次 push |
| V13 | ~2,457 | ~1.7 min | 仅内容变更时 |
| V14 | ~2,844 | ~2.0 min | 仅内容变更时 |

CI 通过 `git diff` 检测变更路径，只触发对应 Worker 的 rebuild：
```yaml
# 只在 v13 内容变更时触发
on:
  push:
    paths: ['apps/docs/content/**/docs/13/**']
```

### 扩展预案

如果未来文件数接近 100K 限制（Paid plan），可进一步按语言拆分 Worker。
每个语言独立部署、独立文件配额，Service Bindings 零网络延迟。

---

## i18n 架构

```
src/content/docs/
  ├── installation.mdx          ← EN (root locale, 无前缀)
  ├── zh-hans/
  │   └── installation.mdx      ← 简体中文
  ├── ja/
  │   └── installation.mdx      ← 日本語
  ├── ar/
  │   └── installation.mdx      ← العربية
  └── ...

URL 结构:
  /installation/                 ← EN (root, 无前缀)
  /zh-hans/installation/         ← 简体中文
  /ja/installation/              ← 日本語
```

Starlight 配置：
```js
locales: {
  root: { label: 'English', lang: 'en' },
  'zh-hans': { label: '简体中文', lang: 'zh-Hans' },
  'zh-hant': { label: '繁體中文', lang: 'zh-Hant' },
  ja: { label: '日本語', lang: 'ja' },
  ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
  de: { label: 'Deutsch', lang: 'de' },
  es: { label: 'Español', lang: 'es' },
  fr: { label: 'Français', lang: 'fr' },
  ru: { label: 'Русский', lang: 'ru' },
},
```

### 域名策略：单域名 + 路径前缀

**选择单域名（path prefix）而非子域名。**

| | 单域名 `nextjs.im/zh-hans/` | 子域名 `zh-hans.nextjs.im` |
|---|---|---|
| 域名权重 | ✅ 集中在一个域 | ❌ 分散到 9 个子域 |
| 反向链接 | ✅ 全部累积到 nextjs.im | ❌ 每个子域独立计算 |
| SSL 证书 | ✅ 1 个 | 需要 wildcard |
| 基础设施 | ✅ 1 个 Worker | 需要路由层 |
| 行业惯例 | ✅ MDN, React, Cloudflare Docs 都用 path prefix | - |

### 完整 URL 结构

```
URL 模式: /{locale?}/{section}/{version?}/{path}/

locale 缺省 = English (root, 无前缀)
version 缺省 = latest (v16)
```

**English (root):**
```
/                                                    ← 首页
/docs/01-app/01-getting-started/01-installation/     ← Latest App Router
/docs/02-pages/01-getting-started/01-installation/   ← Latest Pages Router
/docs/03-architecture/                               ← Architecture
/docs/04-community/                                  ← Community
/docs/14/01-getting-started/01-installation/         ← v14
/docs/13/01-getting-started/01-installation/         ← v13
/learn/01-react-foundations/                          ← Learn
/blog/next-15/                                       ← Blog
```

**简体中文:**
```
/zh-hans/                                                    ← 首页
/zh-hans/docs/01-app/01-getting-started/01-installation/     ← Latest
/zh-hans/docs/14/01-getting-started/01-installation/         ← v14
/zh-hans/docs/13/01-getting-started/01-installation/         ← v13
/zh-hans/learn/01-react-foundations/
/zh-hans/blog/next-15/
```

**其他语言同理:** `/ja/...`, `/zh-hant/...`, `/ar/...`, `/de/...`, `/es/...`, `/fr/...`, `/ru/...`

### SEO 迁移

- 现有 URL: `zh-hans.nextjs.im/docs/app/getting-started/installation`
- 新 URL: `nextjs.im/zh-hans/docs/01-app/01-getting-started/01-installation/`
- **Router Worker 处理 301 重定向**：从旧子域名 URL 到新路径前缀 URL（无规则数限制）
- hreflang 标签由 Starlight 自动生成

---

## App/Pages Router 切换 & 版本切换

### 现有实现分析

Next.js 文档有两个特殊的内容过滤维度：

**1. App Router / Pages Router 切换**

源 MDX 文件（在 `docs/01-app/` 下）同时包含两种 Router 的内容：
```mdx
## Shared content here

<AppOnly>
### App Router specific content
</AppOnly>

<PagesOnly>
### Pages Router specific content
</PagesOnly>
```

Pages Router 版本（在 `docs/02-pages/` 下）**不是独立内容**，而是引用文件：
```yaml
---
title: Create a new Next.js application
source: app/getting-started/installation  # ← 指向 App Router 版本
---
```

Runtime 根据 URL 路径 (`/docs/app/...` vs `/docs/pages/...`) 决定 strip 哪部分内容。

**2. 版本切换**

`docs/13/` 和 `docs/14/` 是独立的内容目录（旧版本文档），`docs/01-app/` 是最新版。

### Astro 方案：Build Time 内容分裂

由于 Astro 是纯静态生成，**不能在 runtime 过滤内容**。预处理脚本在 build time 完成分裂：

```
预处理脚本 (build time):

源文件: content/en/docs/01-app/getting-started/installation.mdx
  包含 <AppOnly> + <PagesOnly> 标签

  ↓ 生成两个版本

输出 1: src/content/docs/docs/app/getting-started/installation.mdx
  → strip <PagesOnly>...</PagesOnly>
  → unwrap <AppOnly>...</AppOnly> (保留 children)

输出 2: src/content/docs/docs/pages/getting-started/installation.mdx
  → strip <AppOnly>...</AppOnly>
  → unwrap <PagesOnly>...</PagesOnly> (保留 children)
```

对于 `docs/02-pages/` 下的引用文件（带 `source` 字段）：
- 解析 `source: app/getting-started/installation`
- 找到对应的 App Router 源文件
- 生成 Pages 版本（strip `<AppOnly>`，保留 `<PagesOnly>`）
- 无需处理引用文件本身

**关键优势：`<AppOnly>` / `<PagesOnly>` 组件在 Astro 中不再需要** — 内容已在 build time 分裂为独立文件。

### URL 结构

```
/docs/app/getting-started/installation/     ← App Router 版本 (latest = v16)
/docs/pages/getting-started/installation/   ← Pages Router 版本 (latest = v16)
/docs/13/getting-started/installation/      ← v13 (frozen)
/docs/14/getting-started/installation/      ← v14 (frozen)
/docs/15/getting-started/installation/      ← v15 (future, when v17 releases)
```

### 版本数据

参考 `.github/nextjs-versions.json`：
```json
{
  "latest": "16.1.6",
  "versions": { "13": "13.5.11", "14": "14.2.35", "15": "15.5.12", "16": "16.1.6" }
}
```

当前内容分布（EN）：
- latest (01-app + 02-pages + 03-arch + 04-community): 368 files → v16
- v14: 316 files (frozen)
- v13: 273 files (frozen)
- v15: 0 files（尚未归档，当 v17 发布时 v16 内容会归档到 `15/`）

### Sidebar 切换器

Starlight 自定义组件，放在 sidebar 顶部：

```
┌──────────────────────────┐
│ 🔄 Using App Router    ▾ │  ← 下拉切换 App/Pages
│ 📦 Latest Version      ▾ │  ← 下拉切换 v13/v14/latest
├──────────────────────────┤
│ Getting Started            │
│   Installation             │
│   Project Structure        │
│   ...                      │
└──────────────────────────┘
```

切换时改变 URL 前缀（`/docs/app/` ↔ `/docs/pages/`），页面纯静态跳转。

### 文件数量影响

| 类型 | 文件数 | 说明 |
|---|---|---|
| 纯 App Router 页面 | ~大部分 | 只生成 1 个文件 |
| 共享页面 (含 AppOnly + PagesOnly) | ~部分 | 生成 2 个文件 (app + pages 版本) |
| v13 页面 | ~200 | 独立内容，直接复制 |
| v14 页面 | ~200 | 独立内容，直接复制 |

预估单语言从 ~1,118 增加到 ~1,300-1,500 个 HTML 文件（取决于共享页面数量），对 100K 限制无压力。

---

## MDX 迁移

### 预处理脚本流程

```python
for each locale:
    for each mdx_file in content/{locale}/docs/:

        1. 读取 frontmatter
        2. 检查是否有 source 字段:
           - 有 source → 这是引用文件，找到源文件，生成 Pages 版本
           - 无 source → 这是源文件

        3. 检查是否包含 <AppOnly> / <PagesOnly>:
           - 包含 → 生成两个版本:
             - App 版本: strip <PagesOnly>, unwrap <AppOnly>
             - Pages 版本: strip <AppOnly>, unwrap <PagesOnly>
           - 不包含 → 直接输出（清理 frontmatter）

        4. 清理 frontmatter:
           - 保留: title, description
           - 移除: nav_title, source, related, translation-updated-at 等

        5. 处理 <Image> 组件 → 转为标准 ![alt](src) 或 <img> 标签

        6. 输出到 src/content/docs/{locale_path}/...
```

### 其他自定义组件映射

| 原始组件 | Astro 处理方式 | 说明 |
|---|---|---|
| `<AppOnly>` | **Build time strip/unwrap** | 不再需要 runtime 组件 |
| `<PagesOnly>` | **Build time strip/unwrap** | 不再需要 runtime 组件 |
| `<Image>` | 转为 `<img>` 标签或 Astro Image | 预处理脚本处理 |
| `<Tabs>` / `<Tab>` | Starlight Tabs | 内置支持 |
| `<Card>` / `<Cards>` | Starlight Cards | 需要适配 |
| `<Callout>` | Starlight Aside | `:::note` / `:::tip` 语法 |

### 构建验证数据

| 测试 | 结果 |
|---|---|
| 529 EN 页面 build | ✅ 17 秒 |
| 产出文件 | 530 HTML + 9 静态资源 = 539 文件 |
| 每页平均大小 | ~47 KB HTML |

---

## 搜索

- **保持现有 Orama Cloud** — 零迁移成本
- **禁用 Pagefind** — 避免产生 ~10K 本地索引文件
- 与 Cloudflare Docs 做法一致（他们用 Algolia DocSearch）

---

## 部署

### CI/CD (GitHub Actions)

```yaml
name: Deploy to CF Workers
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install
      - run: bun run build
      - uses: cloudflare/wrangler-action@v3
        with:
          command: deploy
          apiToken: ${{ secrets.CF_API_TOKEN }}
          accountId: ${{ secrets.CF_ACCOUNT_ID }}
```

### 构建性能估算

- 529 页面: 17 秒
- 全量 10,054 页面: 预估 ~5-10 分钟
- `NODE_OPTIONS='--max-old-space-size=6192'`（CF Docs 同样配置）

---

## 迁移步骤

### Phase 1: 项目搭建 (1-2 天)
1. 创建 Astro + Starlight 项目
2. 迁移包管理器到 bun
3. 配置 9 语言 i18n（root locale）
4. 创建自定义 Astro 组件 (`AppOnly`, `PagesOnly`, `Image`, `Tabs`, `Card`)
5. 配置 sidebar（autogenerate from directory structure）
6. 创建 Worker（重定向 + ASSETS binding）

### Phase 2: 内容迁移 (1 天)
1. 编写 MDX 预处理脚本（frontmatter 清理 + 组件 import）
2. 批量处理 10,054 个 MDX 文件
3. 验证全量 build 通过
4. 抽样检查关键页面

### Phase 3: 部署与切换 (1 天)
1. 部署到 CF Workers (Paid plan, 100K 文件限制)
2. 配置自定义域名
3. Worker 处理 301 重定向（旧子域名 → 新路径）
4. DNS 切换
5. 监控 SEO 和流量

### Phase 4: 清理 (1 天)
1. 下线 Vercel 部署
2. 移除 Next.js/fumadocs 相关代码
3. 更新 CI/CD
4. 更新翻译管线（如果需要）

---

## 风险与缓解

| 风险 | 影响 | 缓解 |
|---|---|---|
| 全量构建时间过长 | 中 | `--max-old-space-size=6192`；Astro 并行编译 |
| SEO 排名下降（URL 变更） | 中 | Worker 301 重定向 + hreflang + Search Console |
| MDX 兼容性问题 | 中 | 预处理脚本 + 抽样验证；v13/v14 遗留内容需特殊处理 |
| Starlight 主题定制不足 | 低 | 支持组件覆盖和 CSS 定制 |
| 文件数超 100K | 极低 | 当前 ~10K，需 10x 增长才触及；Microfrontends 预案 |

---

## POC 验证记录

- **线上地址**: https://nextjs-i18n-astro-poc.pages.dev/
- **EN**: https://nextjs-i18n-astro-poc.pages.dev/installation/
- **ZH-HANS**: https://nextjs-i18n-astro-poc.pages.dev/zh-hans/installation/
- **完整页面**: 10KB MDX, 42 代码块, 自定义组件 — 全部正确渲染
- **语法高亮**: Expressive Code build time 高亮 ✅
- **TOC**: 中英文自动生成 ✅
- **语言切换**: root locale (EN无前缀) + path prefix ✅
- **529 页面批量构建**: 17 秒，539 文件产出 ✅
