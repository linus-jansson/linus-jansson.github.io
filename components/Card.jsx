import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Card.module.css'

export default function Card( props ) {
    return (
        <div className={styles.card} key={props.id}>
            <div className={styles.card_image}>
                <Link href={props.href}>
                    <a target='_blank'>
                        <Image
                            alt="travel"
                            src="/images/shrek.jpg"
                            layout="fill"
                            objectFit="cover"
                            loading='lazy'
                            quality={100}
                        />
                        <div class="overlay"></div>
                    </a>
                    
                </Link>

            </div>
            <div className={styles.card_overlay}>
                <div className={styles.card_content}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>

                </div>
            </div>
        </div>
    )
}