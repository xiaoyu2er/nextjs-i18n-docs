import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { useTranslations } from "next-intl";

export default function Layout({ children }: { children: ReactNode }) {
  const t = useTranslations("baseOptions");

  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions({ title: t("title"), doc: t("doc") })}
    >
      {children}
    </DocsLayout>
  );
}
