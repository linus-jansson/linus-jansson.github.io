import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Hey! I'm Linus!",
  description: 'Full stack developer from Sweden. Here is my portfolio!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden bg-zinc-900"}>{children}</body>
    </html>
  )
}
