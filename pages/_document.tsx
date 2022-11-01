import { Html, Head, Main, NextScript } from "next/document";

import Script from 'next/script'


export default function Document() {
    return (
        <Html>
            <Head>
                <Script strategy='beforeInteractive' src="https://kit.fontawesome.com/9b76113ff6.js" crossOrigin="anonymous" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
