import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/HeaderNew'
import About from '../components/AboutNew'
import Expertise from '../components/ExpertiseNew'
import Portfolio from '../components/PortfolioNew'
import Footer from '../components/FooterNew'

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

        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
            <i className="fa fa-arrow-up"></i>
        </a>
    </>
  )
}
