import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Modern Blog - Share Your Stories',
  description: 'A modern blog platform for sharing stories and ideas',
  keywords: 'blog, stories, articles, modern blog',
  openGraph: {
    title: 'Modern Blog - Share Your Stories',
    description: 'A modern blog platform for sharing stories and ideas',
    url: 'https://modern-blog.com',
    siteName: 'Modern Blog',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Modern Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}