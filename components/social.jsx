import React from 'react'
import styles from './sass/social.module.scss';

import {RiFacebookCircleFill} from 'react-icons/ri'
import {AiFillYoutube} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'

export default function Social() {
    return (
        <div className={styles.social}>
<a href='#'><RiFacebookCircleFill/></a><br/>
<a href='#'> <AiFillYoutube/></a><br/>
<a href='#'><FaInstagramSquare/></a><br/>
<a href='#'> <AiFillTwitterCircle/></a><br/>
            
        </div>
    )
}
