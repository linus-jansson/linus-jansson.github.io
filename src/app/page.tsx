'use client';
import Script from 'next/script';

import Header from '../components/Header'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'


export default function Index() {
    return (
        <>
            <Script strategy='beforeInteractive' src="https://kit.fontawesome.com/9b76113ff6.js" crossOrigin="anonymous" />

            < Header />

            <main id="main" >
                <About />

                <Expertise />

                <Portfolio />

            </main>

            <Footer />

            <ScrollTop />
        </>
    )
}
