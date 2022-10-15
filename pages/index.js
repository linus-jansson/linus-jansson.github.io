import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function Index() {
 

  return (
    <>
        <Head>
            <title>Hey! I'm Linus!</title>
        </Head>

        <Header />

        <main id="main">
            <About/>

            <Portfolio/>

        </main>

        <Footer/>

        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-up-short"></i>
        </a>
    </>
  )
}
