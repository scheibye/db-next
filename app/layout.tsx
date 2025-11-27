import "./globals.css";
import type { Metadata } from "next";
import { getSettings } from "@/lib/settings";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Ubuntu_Sans } from "next/font/google";

const ubuntu = Ubuntu_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
});


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
    <html lang="da" className={ubuntu.className}>
      <body className="relative bg-brand-card">
        {/* Header skal ligge ovenpå hero */}
        <Header />

        {/* Indhold – max 1900 + 10px margin på hver side */}
        <main>
          <div className="mx-auto max-w-[1900px] px-[10px] py-[10px]">
            {children}
          </div>
        </main>

        <Footer settings={settings} />
      </body>
    </html>
  );
}
