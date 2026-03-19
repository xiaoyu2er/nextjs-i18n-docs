#!/bin/bash
set -e

echo "=== Deleting mismatched blog files ==="
bun -e '
import { parseMdx } from "./packages/translate/src/parser.ts";
import fs from "fs";
import path from "path";
function walkMdx(d){const f=[];(function w(p){for(const e of fs.readdirSync(p,{withFileTypes:true})){if(e.isDirectory())w(path.join(p,e.name));else if(e.name.endsWith(".mdx"))f.push(path.relative(d,path.join(p,e.name)))}})(d);return f}
let n=0;
for(const r of walkMdx("content/zh-hans/blog")){
  const ep="content/en/blog/"+r,lp="content/zh-hans/blog/"+r;
  if(!fs.existsSync(ep))continue;
  const en=parseMdx(fs.readFileSync(ep,"utf8")).filter(n=>n.needsTranslation);
  const zh=parseMdx(fs.readFileSync(lp,"utf8")).filter(n=>n.needsTranslation);
  if(en.length!==zh.length){fs.unlinkSync(lp);n++;continue}
  for(let i=0;i<en.length;i++){if(en[i].type!==zh[i].type){fs.unlinkSync(lp);n++;break}}
}
console.log("Deleted",n,"mismatched blog files")
'

echo ""
echo "=== Re-translating blog files ==="
bun run packages/translate/src/batch.pipeline.ts \
  --docs-root content/en --lang zh-hans --output-dir content \
  --pattern "blog/**/*.mdx" --max-tokens 65536 --concurrency 5
