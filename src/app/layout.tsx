import './globals.css'
import layout from '@/styling/layout.module.css'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={'overflow-x-hidden ' + layout.gradient}>
                {children}
            </body>
        </html>
    );
}