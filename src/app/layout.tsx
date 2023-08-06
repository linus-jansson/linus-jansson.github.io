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
            <head>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Hey! I'm Linus!" />
                <meta property="og:description" content="Full stack developer from Sweden. Here is my portfolio!" />
                <meta property="og:url" content="https://limpan.dev/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hey! I'm Linus!" />
                <meta name="twitter:description" content="Full stack developer from Sweden. Here is my portfolio!" />
            </head>
            <body className={inter.className + " overflow-x-hidden bg-zinc-900"}>{children}</body>
        </html>
    )
}
