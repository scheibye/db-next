import './globals.css'
import { Ubuntu_Sans } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/layout/Footer'
// import { getSettings } from '@/lib/settings'
import type { Metadata } from 'next'

// Variable font
const ubuntu = Ubuntu_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dansk Boliglån',
  description: 'Dansk Boliglån - moderne boliglånsløsninger.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const settings = await getSettings()

  return (
    <html lang="da" className={ubuntu.className}>
      <body className="bg-brand-card p-glob-padding text-brand-dark relative antialiased">
        {/* <Header /> */}

        {/* Indhold – max 1900 + 10px margin på hver side */}
        <main>
          <div className="mx-auto max-w-[1900px]">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  )
}
