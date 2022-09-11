import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/test.module.css'
import icons from '../styles/icons.module.css'

export default function s() {
    return (
        <div className={styles.main}>
            <Head>
                <title>Hey! I'm linus!</title>
            </Head>
            <div className={styles.container}>
                <div key='pfp' className={styles.profile_picture}>
                    <Image
                        alt="Profile picture"
                        src="/images/shrek.jpg"
                        layout="fill"
                        objectFit="cover"
                        loading='lazy'
                        quality={100}
                    />
                    <h1>pfp</h1>
                </div>
                <div id='content' className={styles.content}>
                    <div id='about'>
                        <h2>Hey 👋 I'm Linus!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, se Lorem ipsum dolor sit amet, consectetur adipiscing elit, se</p>
                    </div>
                    <div id='socials'>
                        <h3>Reach out!</h3>
                        <Link href="mailto:contact@limpan.dev">
                            <a className={styles.link}>Mail me!</a> 
                        </Link>
                        <br />
                        <Link href="https://github.com/linus-jansson/">
                            {/* <a className={styles.link}>Mail me!</a> */}
                            <a target="_blank" className={icons.icon_github}></a>
                        </Link>
                        {/* <p>icon links</p> */}
                        {/* <i className={icons.icon_github}></i> */}
                    </div>
                    {/* <h1>socials</h1> */}
                </div>
                
            </div>
        </div>
    )
}