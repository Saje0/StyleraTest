import localFont from 'next/font/local'
import type React from 'react'
import type { Metadata } from 'next'
// import { GeistMono } from 'geist/font/mono'
import { Figtree, Cairo } from 'next/font/google'
import { LanguageProvider } from '@/contexts/language-context'
import FontDirectionWrapper from '@/contexts/FontWrapper'
import { Toaster } from 'sonner'
import './globals.css'
import Link from 'next/link'

const nasalization = localFont({
  src: './../public/fonts/FontsFree-Net-nasalization-rg.ttf',
  variable: '--font-english',
  display: 'swap',
})

const geDinar = localFont({
  src: './../public/fonts/GE-Dinar-One-Medium.otf',
  variable: '--font-arabic',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'StyleraTech | Software Solutions',
  description:
    'StyleraTech is a software development company specializing in modern web technologies and advanced IT solutions.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <FontDirectionWrapper>
        <html suppressHydrationWarning>
          <body
            className={`${nasalization.variable} ${geDinar.variable} ${figtree.variable} ${cairo.variable} antialiased`}
          >
            <link rel='icon' href='/favicon.ico' sizes='any' />
            {children}
            <Toaster position='bottom-right' />
          </body>
        </html>
      </FontDirectionWrapper>
    </LanguageProvider>
  )
}
