import React from 'react'
import Link from 'next/link'
import styles from './sass/links.module.scss';

export default function Links() {
    return (
        <div className={styles.links}>
         
         <button><Link href='#'><a>Fun Facts</a></Link></button>
         <button><Link href='#'><a>Awesome Facts</a></Link></button>
            
        </div>
    )
}
