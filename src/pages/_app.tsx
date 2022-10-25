import '../styles/globals.css'

import Script from 'next/script'

import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script strategy='beforeInteractive' src="https://kit.fontawesome.com/9b76113ff6.js" crossOrigin="anonymous" />

            <Component {...pageProps} />

        </>
    )
}

export default MyApp
