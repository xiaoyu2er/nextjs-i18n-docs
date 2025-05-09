import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { getLocale } from "next-intl/server";

const inter = Inter({
  subsets: ["latin"],
});

export default async function Layout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  
  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
