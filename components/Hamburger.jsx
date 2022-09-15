import Link from 'next/link'

import styles from '../styles/Hamburger.module.css'


export default function Hamburger() {

return (
    <div className={styles.ham_div}>
        <label>
            {/* https://codepen.io/alvarotrigo/pen/ExwgbZv */}
            <input type="checkbox" className={styles.input}/>
            <span className={styles.menu}> <span className={styles.hamburger}></span> </span>
            <ul className={styles.menu_links}>
                <li> 
                    <Link href="/"><a  className={styles.menu_link}>Home</a></Link>
                </li>
                <li> 
                    <Link href="/portfolio" ><a className={styles.menu_link}>My Projects</a></Link> 
                </li>
            </ul>
        </label>

    </div>

)

}