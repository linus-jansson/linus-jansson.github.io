import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Portfolio.module.css'

import Hamburger from '../components/Hamburger'
import Card from '../components/Card'

export default function p() {
    let my_work = {
        rafiki: {
            title: 'Pizzeria Rafiki',
            description: "A website for a pizzeria",
            link: "https://ntig-uppsala.github.io/pizzeria-rafiki/",
            repo: 'https://github.com/NTIG-Uppsala/pizzeria-rafiki'
        },
        saxe: {
            title: 'Frisör Saxè',
            description: "A website for a hairdresser",
            link: "https://ntig-uppsala.github.io/Frisor-Saxe/",
            repo: "https://github.com/NTIG-Uppsala/Frisor-Saxe"
        }

    }
    let cards = []


    for (const mywork in my_work) {
        if (my_work.hasOwnProperty.call(my_work, mywork)) {
            const properties = my_work[mywork];
            cards.push(
                <Card key={properties.title}
                    title={properties.title}
                    description={properties.description}
                    href={properties.link} />
            )
        }
    }

    return (
        <div className={styles.main}>
            <Head>
                <title>Here is some of my work!</title>
            </Head>
            <Hamburger/>

            <div className={styles.portfolio}>
                <div className='title'>
                    <h1>Here is my work!</h1>
                </div>
                

                <div className={styles.cards}>
                    {cards}
                </div>
            </div>
        </div>
    )
}