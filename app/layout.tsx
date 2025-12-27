import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio Développeur Logiciel',
  description: 'Portfolio professionnel - Développeur spécialisé en C# / .NET, Kafka, RabbitMQ, React, MongoDB',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body>{children}</body>
    </html>
  )
}

