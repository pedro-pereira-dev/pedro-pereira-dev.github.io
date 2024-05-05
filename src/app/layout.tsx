import './globals.css'

export const metadata = {
  title: 'Pedro Pereira - Personal Website',
  description: 'Online CV',
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
