import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import styles from '../sass/index.module.scss'

import Social from '../components/social'
import Links from '../components/Links'


export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Fact Umbrella</title>
        <meta name="description" content="Fun facts,Amazing facts, Psychological facts" />
        <link rel="icon" href="/favicon.png" />
      </Head>



  <Nav/>
  <Links/>
<Social/>



  <h1><span>|</span>FACTS</h1>
  <h2><span>|</span>Fun Facts</h2>

<div className={styles.fcontainer}>
  <div>
    <Link href='#'><a>
  <Image src='/funfact1.png' alt='fun Fact Image' className={styles.image}
  layout='fill'
  />
  </a></Link>
  </div>

  <div>
  <Image src='/funfact2.png' alt='fun Fact Image' className={styles.image}
  layout='fill'
  />
  </div>
  <div>

  <Image src='/funfact3.png' alt='fun Fact Image' className={styles.image}
  layout='fill'
  />
  </div>

</div>


<h2><span>|</span>Psychological Facts</h2>

<div className={styles.fcontainer}>
  <div>

  </div>
  <div>

  </div>
  <div>
    
  </div>

</div>










    </div>
  )
}
