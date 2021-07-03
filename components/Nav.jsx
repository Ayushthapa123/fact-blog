import React from 'react'
import styles from './sass/nav.module.scss'

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src='/logo2.png' alt='Logo'/>
            </div>
            <div className={styles.searchbar}>
            <input type='search' placeholder='Search Facts'/>
            <button>Search</button>
            </div>
        </div>
    )
}
