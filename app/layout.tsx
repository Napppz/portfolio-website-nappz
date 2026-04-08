import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LoadingScreen } from '@/components/ui/loading-screen'
import { AnimatedBackground } from '@/components/ui/animated-background'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Rizki Agustianto | Portfolio',
  description: 'Website portfolio Rizki Agustianto, seorang Mahasiswa Informatika dan Web Developer dengan keahlian Python, Java, JavaScript, HTML, dan CSS.',
  keywords: ['Rizki Agustianto', 'Portfolio', 'Web Developer', 'Mahasiswa Informatika', 'Python', 'Java', 'Next.js', 'React', 'Frontend Developer'],
  authors: [{ name: 'Rizki Agustianto' }],
  creator: 'Rizki Agustianto',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://v0-portfolio-website.vercel.app/', // Change this to the actual URL if known
    title: 'Rizki Agustianto | Web Developer Portfolio',
    description: 'Jelajahi proyek, keahlian, dan sertifikat yang telah diraih oleh Rizki Agustianto.',
    siteName: 'Portfolio Rizki',
    images: [
      {
        url: '/images/profile.jpg', // Using profile image for sharing preview
        width: 800,
        height: 600,
        alt: 'Rizki Agustianto Profile Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rizki Agustianto | Portfolio',
    description: 'Website portfolio mahasiswa Informatika & Web Developer.',
    images: ['/images/profile.jpg'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased text-foreground bg-transparent dark">
        <AnimatedBackground />
        <LoadingScreen />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
