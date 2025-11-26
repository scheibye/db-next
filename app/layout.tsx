import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getSettings } from "@/lib/settings";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dansk Boliglån",
  description: "Dansk Boliglån – moderne boliglånsløsninger.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();

  return (
    <html lang="da">
      <body className={inter.className}>
        <Header settings={settings} />
        <div className="min-h-[70vh]">{children}</div>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
