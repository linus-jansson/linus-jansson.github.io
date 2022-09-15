import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Portfolio.module.css'
import icons from '../styles/icons.module.css'

import Hamburger from '../components/Hamburger'

export default function p() {
    return (
        <div className={styles.main}>
            <Head>
                <title>Here is some of my work!</title>
            </Head>
            <Hamburger/>

            <div id='portfolio'>
                <h1>Here is my work!</h1>
            </div>
        </div>
    )
}