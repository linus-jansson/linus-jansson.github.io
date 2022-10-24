import type { NextPage } from 'next'

import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

const ScrollTop: NextPage = () => {
    const [showScroll, setShowScroll] = useState(false)


    useEffect(() => {
        if (window !== undefined) {
            // Get the button
            window.onscroll = () => {
                setShowScroll(() => (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20))
            };
        }

    }, [])


    return (
        <>
            {(!showScroll) ? null :
                <button
                    onClick={() => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0; }}
                    type="button"
                    className="z-[99999] fixed p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
                    id="btn-back-to-top"
                >
                    <i className="text-zinc-50 text-lg fa fa-arrow-up fa-bounce" > </i>
                </button>
            }


        </>
    )
}

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>Hey! I & apos;m Linus! </title>
            </Head>

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

export default Index
