import './globals.css'
import { Ubuntu_Sans } from 'next/font/google'
import Script from 'next/script'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import type { Metadata } from 'next'

// Variable font
const ubuntu_sans = Ubuntu_Sans({
  subsets: ['latin'],
  variable: '--font-ubuntu-sans',
})

export const metadata: Metadata = {
  title: 'Dansk Boliglån',
  description: 'Dansk Boliglån – moderne boliglånsløsninger.',
   icons: {
    // Standard favicon til tabs m.m.
    icon: [
      {
        url: '/db-fav-150x150-1-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/db-fav-150x150-1-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    // Apple touch icon (iOS “tilføj til hjemmeskærm”)
    apple: [
      {
        url: '/db-fav-150x150-1-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    // Evt. ekstra stor til diverse PWA/OS-brug
    other: [
      {
        rel: 'icon',
        url: '/db-fav-150x150-1-270x270.png',
        sizes: '270x270',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang="da" className={`${ubuntu_sans.variable}`}>
      <head>      
      </head>

      <body className="bg-brand-card p-global-padding text-brand-dark relative antialiased">
        {gtmId && (
          <>
            {/* GTM script */}
            <Script
              id="gtm-base"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${gtmId}');
                `,
              }}
            />

            {/* GTM noscript fallback */}
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}

        <Header />
        <main>{children}</main>
        <Footer />
          {/* Trustpilot script - lazy load for better performance */}
        <Script src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
