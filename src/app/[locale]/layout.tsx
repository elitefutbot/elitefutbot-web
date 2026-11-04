import type { Metadata } from "next";
import RootDocument from "@/components/RootDocument";
import { getLocaleEntry } from "@/data/locales/registry";
import { rootMetadata } from "@/lib/root-metadata";

export const metadata: Metadata = rootMetadata;

/**
 * Root layout for translated pages (/de, /ar, /es-mx, ...). Sets <html lang>
 * and dir on the server from the locale registry, so the first HTML response
 * already has the right language (e.g. Arabic is lang="ar" dir="rtl").
 */
export default async function LocaleRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const entry = getLocaleEntry(locale);

  return (
    <RootDocument lang={entry?.hreflang ?? "en"} dir={entry?.direction ?? "ltr"}>
      {children}
    </RootDocument>
  );
}
