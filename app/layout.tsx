import '@/app/globals.css'
import { Ubuntu_Sans } from 'next/font/google'
import Script from 'next/script'
import { Providers } from '@/app/providers'
import { Footer } from '@/components/layout/Footer'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang="da" className={`${ubuntu_sans.variable}`}>
      <head>
        {/* Trustpilot widget */}
        <Script src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" />
      </head>

      <body className="bg-brand-card p-global-padding text-brand-dark relative antialiased">
        {/* This wrapper is required by Base UI */}
        <div className="isolate">
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

          <Providers>{children}</Providers>
          <Footer />
        </div>
      </body>
    </html>
  )
}
