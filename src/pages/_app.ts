import '../styles/globals.css'

import Script from 'next/script'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script strategy='beforeInteractive' src="https://kit.fontawesome.com/9b76113ff6.js" crossOrigin="anonymous" />

            <Component {...pageProps} />

        </>

    )
}

export default MyApp
