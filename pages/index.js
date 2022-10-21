import React, { useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

const ScrollTop = () => {
    useEffect(() => {
        if (window !== undefined) {
            // Get the button
            let mybutton = document.getElementById("btn-back-to-top");

            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function () {
                scrollFunction();
            };

            function scrollFunction() {
                if (
                    document.body.scrollTop > 20 ||
                    document.documentElement.scrollTop > 20
                ) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
            }
            // When the user clicks on the button, scroll to the top of the document
            mybutton.addEventListener("click", backToTop);

            function backToTop() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        }

    }, [])

    return (
        <button style={{ position: 'fixed', display: 'none' }} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5" id="btn-back-to-top">
            <i className="w-4 h-4 text-zinc-50 fa fa-arrow-up"></i>
        </button>
    )
}

export default function Index() {



    return (
        <>
            <Head>
                <title>Hey! I&apos;m Linus!</title>
            </Head>

            <Header />

            <main id="main">
                <About />

                <Expertise />

                <Portfolio />

            </main>

            <Footer />
            <ScrollTop />
        </>
    )
}
