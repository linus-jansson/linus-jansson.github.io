import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Card.module.css'

export default function Card( props ) {
    return (
        <Link href={props.href}>
            <div className={styles.card} key={props.id}>
                <div className={styles.card_image}></div>
                <div className={styles.card_content}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </Link>
        
    )
}