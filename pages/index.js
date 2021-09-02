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
    <Link href='/funfacts/Chewing-gum-boosts-concentration/'><a>
  <Image src='/funfact1.png' alt='Chewing gum boost concentration' className={styles.image}
  layout='fill'
  />
  </a></Link>
  </div>

  <div>
  <Link href='/funfacts/first-iphone-was-not-made-by-apple'><a>
  <Image src='/funfact2.png' alt='Apples iphone was not first iphone' className={styles.image}
  layout='fill'
  />
   </a></Link>
  </div>


  <div>
  <Link href='/funfacts/Penguins-Used-to-Be-Six-Feet-Tall/'><a>
  <Image src='/penguin.png' alt='penguins were 6ft tall' className={styles.image}
  layout='fill'
  />
  </a></Link>
  </div>

</div>


<h2><span>|</span>Awesome Facts</h2>

<div className={styles.fcontainer}>
<div>
  <Link href='/funfacts/Showers-really-do-spark-creativity'><a>
  <Image src='/shower.png' alt='showers spark creativity' className={styles.image}
  layout='fill'
  />
  </a></Link>
  </div>

  <div>
  <Link href='/funfacts/worlds-oldest-hotel-since-705ad'><a>
  <Image src='/hotel.png' alt='Oldest hotel' className={styles.image}
  layout='fill'
  />
  </a></Link>
  </div>

  <div>
  <Link href='/funfacts/apple-can-last-up-to-10-months'><a>
  <Image src='/apple.png' alt='Apple can last 10 months' className={styles.image}
  layout='fill'
  />
  </a></Link>
  </div>


</div>










    </div>
  )
}
