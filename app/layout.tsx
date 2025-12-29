import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Joffrey Lemery - Ingénieur Développeur Expert',
    template: '%s | Joffrey Lemery',
  },
  description: 'Ingénieur Développeur .NET expert en architectures distribuées, microservices, event streaming (Kafka, RabbitMQ) et systèmes en production.',
  keywords: ['Développeur .NET', 'C#', 'Kafka', 'RabbitMQ', 'Microservices', 'Architecture distribuée', 'Ingénieur logiciel'],
  authors: [{ name: 'Joffrey Lemery' }],
  creator: 'Joffrey Lemery',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://portofolio.botbot.fr',
    title: 'Joffrey Lemery - Ingénieur Développeur Expert',
    description: 'Ingénieur Développeur .NET expert en architectures distribuées et systèmes en production',
    siteName: 'Portfolio Joffrey Lemery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joffrey Lemery - Ingénieur Développeur Expert',
    description: 'Ingénieur Développeur .NET expert en architectures distribuées et systèmes en production',
  },
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
  verification: {
    // Ajoutez vos clés de vérification si nécessaire
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}

