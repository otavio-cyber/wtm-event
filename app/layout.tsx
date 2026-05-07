import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VNS Therapy Night | LivaNova Epilepsy',
  description: 'Evento exclusivo VNS Therapy Night da LivaNova Epilepsy. Participe de uma noite especial com palestras das Dras. Daniela Bezerra e Juliana Zuaini no Restaurante Pobre Juan em Campinas.',
  keywords: ['VNS Therapy', 'LivaNova', 'Epilepsia', 'Neurologia', 'Evento Médico', 'Campinas'],
  authors: [{ name: 'WTM Saúde' }],
  creator: 'WTM Saúde',
  publisher: 'LivaNova',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vnstherapynight.com.br',
    siteName: 'VNS Therapy Night',
    title: 'VNS Therapy Night | LivaNova Epilepsy',
    description: 'Evento exclusivo VNS Therapy Night da LivaNova Epilepsy. Participe de uma noite especial com palestras sobre tratamento de epilepsia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VNS Therapy Night - LivaNova Epilepsy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VNS Therapy Night | LivaNova Epilepsy',
    description: 'Evento exclusivo VNS Therapy Night da LivaNova Epilepsy.',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#6B1E7A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-[#4C1D6B]">
      <head>
        {/* Schema.org Event structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'VNS Therapy Night',
              description: 'Evento exclusivo da LivaNova Epilepsy sobre VNS Therapy para tratamento de epilepsia.',
              startDate: '2025-05-20T19:30:00-03:00',
              endDate: '2025-05-20T23:00:00-03:00',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: 'Restaurante Pobre Juan',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Rod. Dom Pedro I, 53',
                  addressLocality: 'Campinas',
                  addressRegion: 'SP',
                  addressCountry: 'BR',
                },
              },
              organizer: {
                '@type': 'Organization',
                name: 'LivaNova Epilepsy',
                url: 'https://www.livanova.com',
              },
              performer: [
                {
                  '@type': 'Person',
                  name: 'Dra. Daniela Bezerra',
                  jobTitle: 'Neurologista',
                },
                {
                  '@type': 'Person',
                  name: 'Dra. Juliana Zuaini',
                  jobTitle: 'Neurologista',
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
