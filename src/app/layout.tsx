import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'DEUR - Modern Fashion Store',
  description: 'Experience modern fashion in our immersive 3D showroom. Discover curated collections for men and women in a sophisticated retail environment.',
  keywords: 'fashion, clothing, 3D store, virtual shopping, mens wear, womens wear, DEUR',
  authors: [{ name: 'DEUR' }],
  creator: 'DEUR',
  publisher: 'DEUR',
  openGraph: {
    title: 'DEUR - Modern Fashion Store',
    description: 'Experience modern fashion in our immersive 3D showroom.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DEUR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEUR - Modern Fashion Store',
    description: 'Experience modern fashion in our immersive 3D showroom.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased bg-neutral-50 text-neutral-900`}>
        {children}
      </body>
    </html>
  )
}