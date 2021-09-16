import React from 'react'
import Link from 'next/link'
import Nav from '../Nav'
import Social from '../social'

import Links from '../../components/Links'
import Shortorlong from '../../components/shortorlogn';

import styles from '../sass/blogtemplate.module.scss';

import Footer from '../Footer'
import Bestfacts from '../bestfacts'






export default function Template(props,articles) {


    return (   

<>

        <div className={styles.template}>
<div>
<Nav/>
</div>
<Social/>

 

        
   <div className={styles.article}>
   {props.children}
   </div>

<Shortorlong/>


       
        </div>
        <Bestfacts/>
        <Footer/>
        </>
    )
}