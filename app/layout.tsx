import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'Colorful and animated portfolio showcasing full stack development projects',
  icons: {
    icon: '/gentleman-favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="gradient-bg">{children}</body>
    </html>
  )
}