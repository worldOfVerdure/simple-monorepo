import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
const SOCIAL_PREVIEW_IMAGE = `${SITE_URL}/social-preview.jpg`;

export const metadata: Metadata = {
  title: 'Simple Demo | Full-Stack Web Developer Tech Stack',
  description: 'This is my personal tech stack I use to build performant websites and applications. Fueled by the React Ecosytem: React, Next.js, Express.js, and more. Get in touch!',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Andrew Chupka', url: SITE_URL }],
  openGraph: {
    title: 'Simple Demo | Full-Stack Web Developer Tech Stack',
    description: 'This is my personal tech stack I use to build performant websites and applications. Fueled by the React Ecosytem: React, Next.js, Express.js, and more. Get in touch!',
    url: SITE_URL,
    siteName: 'Simple Demo | Full-Stack Web Developer Tech Stack',
    type: 'website',
    images: [
      {
        url: SOCIAL_PREVIEW_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Simple Demo | Full-Stack Web Developer Tech Stack'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple Demo | Full-Stack Web Developer Tech Stack',
    description: 'This is my personal tech stack I use to build performant websites and applications. Fueled by the React Ecosytem: React, Next.js, Express.js, and more. Get in touch!',
    images: [SOCIAL_PREVIEW_IMAGE]
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest'
};
