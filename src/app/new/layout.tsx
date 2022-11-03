import Script from 'next/script'
import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>Hey! I&apos;m Linus! </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            </head>

            <body className='bg-zinc-900'>
                {children}
            </body>

        </html>
    );
}
