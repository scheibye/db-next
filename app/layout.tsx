import './globals.css'
import { Ubuntu_Sans } from 'next/font/google'
import Script from 'next/script'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
// import { getSettings } from '@/lib/settings'
import type { Metadata } from 'next'

// Variable font
const ubuntu_sans = Ubuntu_Sans({
  subsets: ['latin'],
  variable: '--font-ubuntu-sans',
})

export const metadata: Metadata = {
  title: 'Dansk Boliglån',
  description: 'Dansk Boliglån – moderne boliglånsløsninger.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const settings = await getSettings()

  return (
    <html lang="da" className={`${ubuntu_sans.variable}`}>
      <head>
        {/* Trustpilot widget */}
        <Script src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" />
      </head>

      <body className="bg-brand-card p-global-padding text-brand-dark relative antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
