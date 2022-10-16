import { useEffect } from 'react'
import Script from 'next/script'



function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script strategy='beforeInteractive' src="https://kit.fontawesome.com/9b76113ff6.js" crossorigin="anonymous" />

            <Script strategy='beforeInteractive' src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" />

            <Script strategy='beforeInteractive' src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" />
            <Script strategy='beforeInteractive' src="vendor/swiper/swiper-bundle.min.js"/>
            <Script strategy='beforeInteractive' src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"/>


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
