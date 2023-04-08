import Providers from '@/components/Providers/Providers'
import './globals.css'

// Done after the video and optional: add page metadata
export const metadata = {
  title: 'ChatApp | Home',
  description: 'Welcome to the ChatApp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}