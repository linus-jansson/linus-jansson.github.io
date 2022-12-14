import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className='overflow-x-hidden bg-zinc-900'>
                {children}
            </body>
        </html>
    );
}