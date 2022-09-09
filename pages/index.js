import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css' // not using

export default function Home() {
    return (
    <div className={styles.container}>
        <Head>
            <title>Hey! I'm linus!</title>
        </Head>
        <header>
            <h1>header</h1>
        </header>
        <main>
            <div id='my-work' className='container'>
                <h1>LINUS</h1>
                <div className='item'>LINUS</div>
                <div className='item'>LINUS</div>
                <div className='item'>LINUS</div>
                <div className='item'>LINUS</div>
                <div className='item'>LINUS</div>
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
