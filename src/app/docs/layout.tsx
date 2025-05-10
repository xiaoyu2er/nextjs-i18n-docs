import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { useTranslations } from "next-intl";

export default function Layout({ children }: { children: ReactNode }) {
  const t = useTranslations("baseOptions");
  const docsLayout: DocsLayoutProps = {
    ...baseOptions({ title: t("title") }),
    tree: source.pageTree,
  };

  return <DocsLayout {...docsLayout}>{children}</DocsLayout>;
}
