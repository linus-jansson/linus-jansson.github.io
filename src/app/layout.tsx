import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className='bg-zinc-900 overflow-x-hidden'>
                {children}
            </body>
        </html>
    );
}