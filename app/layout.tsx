import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tejaswi Nagineni — CSE Student & Web Developer',
  description:
    'Portfolio of Tejaswi Nagineni, a first-year B.Tech CSE student at SRM Institute of Science and Technology building in Web Development and Web3.',
  generator: 'v0.app',
  keywords: [
    'Tejaswi Nagineni',
    'Computer Science',
    'Web Development',
    'Web3',
    'SRM Institute',
    'Portfolio',
  ],
  authors: [{ name: 'Tejaswi Nagineni' }],
  openGraph: {
    title: 'Tejaswi Nagineni — CSE Student & Web Developer',
    description:
      'First-year B.Tech CSE student passionate about Web Development, Web3, and building real projects.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1220' },
  ],
}

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
