import { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Pedro Pereira - Personal Website',
  description:
    'Explore my journey: Master of CS | Experienced Full Stack Developer | Ecommerce & Media Streaming | Tech Enthusiast',
  openGraph: { images: 'https://pedrojoaopereira.github.io/photo.jpg' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center"
        style={{ backgroundImage: "url('background.jpg')" }}
      >
        <>{children}</>
      </body>
    </html>
  )
}
