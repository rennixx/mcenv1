import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';

// Elegant serif font for headings
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

// Modern sans-serif font for body text
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
});

// SEO and metadata configuration
export const metadata: Metadata = {
  title: {
    default: 'Majestic Equestrian Club | Premium Horse Riding & Training',
    template: '%s | Majestic Equestrian Club',
  },
  description:
    'Experience world-class equestrian excellence at Majestic Equestrian Club. Offering premier horse riding lessons, professional training programs, and exclusive membership in a stunning countryside setting.',
  keywords: [
    'equestrian club',
    'horse riding',
    'horse training',
    'riding lessons',
    'dressage',
    'show jumping',
    'polo',
    'stables',
    'equine',
    'horseback riding',
    'riding academy',
    'horse boarding',
  ],
  authors: [{ name: 'Majestic Equestrian Club' }],
  creator: 'Majestic Equestrian Club',
  publisher: 'Majestic Equestrian Club',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Majestic Equestrian Club',
    title: 'Majestic Equestrian Club | Premium Horse Riding & Training',
    description:
      'Experience world-class equestrian excellence. Premier horse riding lessons, professional training, and exclusive membership.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Majestic Equestrian Club',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Majestic Equestrian Club | Premium Horse Riding & Training',
    description:
      'Experience world-class equestrian excellence. Premier horse riding lessons, professional training, and exclusive membership.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
};

// Viewport configuration for mobile-first responsive design
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fefdfb' },
    { media: '(prefers-color-scheme: dark)', color: '#2a1f1a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-cream-50 font-sans text-neutral-900 antialiased">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary-800 focus:px-4 focus:py-2 focus:text-cream-50"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <div id="main-content" className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
