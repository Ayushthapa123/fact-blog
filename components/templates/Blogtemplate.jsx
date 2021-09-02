import React from 'react'
import Nav from '../Nav'
import Social from '../social'

import Links from '../../components/Links'
import Shortorlong from '../../components/shortorlogn';

import styles from '../sass/blogtemplate.module.scss';


export default function Template(props) {



 


    return (   
        <div className={styles.template}>
<div>
<Nav/>
</div>
<Social/>

 

        
   <div className={styles.article}>
   {props.children}
   </div>

<Shortorlong/>
<Links/>

   
            {/* <Footer/> */}
        </div>
    )
}