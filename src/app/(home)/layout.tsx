import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import { useTranslations } from "next-intl";

export default function Layout({ children }: { children: ReactNode }) {
  const t = useTranslations("baseOptions");
  return (
    <HomeLayout {...baseOptions({ title: t("title"), doc: t("doc") })}>
      {children}
    </HomeLayout>
  );
}
