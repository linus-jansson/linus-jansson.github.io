import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Portfolio.module.css'
import icons from '../styles/icons.module.css'

import Hamburger from '../components/Hamburger'
import Card from '../components/Card'

export default function p() {
    let cards = []

    for (let i = 1; i <= 8; i++) {
        cards.push(<Card key={i} title={`Portfolio card${i}`} description='This website! Built with Next.js and not TailwindCSS.' href='' />)
    }

    return (
        <div className={styles.main}>
            <Head>
                <title>Here is some of my work!</title>
            </Head>
            <Hamburger/>

            <div id={styles.portfolio}>
                <h1>Here is my work!</h1>
                <div className={styles.cards}>
                    {cards}
                </div>
            </div>
        </div>
    )
}