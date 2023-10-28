import { Metadata } from 'next';
import './globals.css'

export const metadata: Metadata = {
    title: 'Hey! I\'m Linus!',
    description: 'Full stack developer from Sweden. Here is my portfolio!',
    openGraph: {
        type: 'website',
        title: 'Hey! I\'m Linus!',
        description: 'Full stack developer from Sweden. Here is my portfolio!',
        url: 'https://limpan.dev/',
        images: 'https://limpan.dev/images/background.jpg',
    },
    other: {
        'theme-color': '#18181B',
        'apple-mobile-web-app-capable': 'true',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
    }
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={'overflow-x-hidden'}>
                {children}
            </body>
        </html>
    );
}