import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Index.module.css'
import icons from '../styles/icons.module.css'

import Hamburger from '../components/Hamburger'


export default function a() {
    return (
        <div className={styles.main}>
            <Head>
                <title>Hey! I&apos;m linus!</title>
            </Head>
            {/* <Hamburger/> */}
            <div className={styles.container}>
                <div key='pfp' className={styles.profile_picture}>
                    <Image
                        alt="Profile picture"
                        src="/images/profile.png"
                        layout="fill"
                        objectFit="cover"
                        loading='lazy'
                        quality={100}
                    />
                    <h1>pfp</h1>
                </div>
                <div id='content' className={styles.content}>
                    <div id='about'>
                        <h2>Hey 👋 I&apos;m Linus!</h2>
                        <p>Self-taught (*mostly*) developer from Sweden. I usually work on some small projects which you can find  <Link href="https://github.com/linus-jansson/"><a target="_blank" className={styles.link}>here!</a></Link></p>
                    </div>
                    <div id='socials'>
                        <h3 style={{textAlign: 'left'}}>Reach out!</h3>
                        <ul>
                            <li>
                                <Link href="mailto:contact@limpan.dev">
                                    <a className={styles.link}>Mail me!</a> 
                                </Link>
                            </li>
                            <li>
                                <Link href="https://github.com/linus-jansson/">
                                    <a target="_blank" className={icons.icon_github}></a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="https://linkedin.com/in/linus-jansson-94715924a">
                                    <a target="_blank" className={icons.icon_linkedin}></a>
                                </Link>
                            </li> */}
                        </ul>
                        

                        
                        

                    </div>
                </div>
                
            </div>
        </div>
    )
}