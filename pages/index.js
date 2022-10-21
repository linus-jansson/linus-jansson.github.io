import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function Index() {
 

  return (
    <>
        <Head>
            <title>Hey! I&apos;m Linus!</title>
        </Head>

        <Header />

        <main id="main">
            <About/>

            <Expertise/>

            <Portfolio/>

        </main>

        <Footer/>

        <a href="#" onClick={() => console.log("scroll up button pressed")}className="back-to-top fixed flex justify-center bottom-[15] right-[15] w-40 h-40 z-100 bg-[#b8a07e]">
            <i className="font-[28px] text-zinc-50 fa fa-arrow-up"></i>
        </a>
    </>
  )
}
