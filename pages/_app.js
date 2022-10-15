import { useEffect } from 'react'
import Script from 'next/script'



function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script strategy='beforeInteractive' src="vendor/bootstrap/js/bootstrap.bundle.min.js"/>

            <Script strategy='beforeInteractive' src="vendor/glightbox/js/glightbox.min.js"/>
            <Script strategy='beforeInteractive' src="vendor/isotope-layout/isotope.pkgd.min.js"/>
            <Script strategy='beforeInteractive' src="vendor/swiper/swiper-bundle.min.js"/>
            <Script strategy='beforeInteractive' src="vendor/typed.js/typed.min.js"/>


            <Script strategy='afterInteractive' src='js/main.js' onLoad={ ()=> {
                // taky way to run the scripts in main.js after the page is loaded
                if (typeof window !== "undefined") {
                    window.dispatchEvent(new Event("DOMContentLoaded"));
                }
            }}/>


            <Component {...pageProps} />

        </>
        
    )
}

export default MyApp
