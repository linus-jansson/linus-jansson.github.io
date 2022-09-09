import Head from 'next/head'
import Image from 'next/image'


import styles from '../styles/Home.module.css' // not using

import Card from '../components/Card.jsx'

export default function Home() {
    const cards = []
    let desc_data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se"
    for (let i = 0; i < 12; i++) {

        cards.push(<Card title={"test"} id={`card-${i}`} description={desc_data} href="https://example.com/"  />)
    }

    return (
    <div className={styles.container}>
        <Head>
            <title>Hey! I'm linus!</title>
        </Head>
        <header>
            <h1>header</h1>
        </header>
        <main>
            <div id='my-work' className='cards'>
                {cards}
            </div>
            <div id='skills' className='container'>
                <p>test</p>
            </div>
            
        </main>
        <footer className='footer'>
            <div className='socials'>
                <p>socials</p>
            </div>
            <div className='copyright'>
                <p>Footer</p>
            </div>
        </footer>
    </div>
    )
}
