import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './sass/bestfacts.module.scss'

export default function Bestfacts() {
    return (
<>
<h2>You May also like</h2><hr/>

        <div className={styles.bestfacts}>
<div>


<Link href='/facts/entrepreneurship-facts'><a>
<h2>Entrepreneurship Facts</h2>
  </a></Link>  

  <Link href='/facts/facts-about-business-world/'><a>
<h2>Business world facts</h2>
  </a></Link> 

  <Link href='/facts/share-market-facts/'><a>
<h2>Share Market facts</h2>
  </a></Link> 

  <Link href='/facts/facts-about-coding'><a>
<h2>Coding Facts</h2>
  </a></Link> 

</div>     



<div>
<Link href='/facts/facts-about-nepal'><a>
<h2>Nepal Facts</h2>
  </a></Link> 
</div>

<div>
<Link href='/facts/fact-about-skincare'><a>
<h2>Skincare Facts</h2>
  </a></Link> 

  <Link href='/facts/awesome-beauty-tips-facts'><a>
<h2>Beauty facts and tips</h2>
  </a></Link> 

</div>
            
        </div>

</>

    )
}
