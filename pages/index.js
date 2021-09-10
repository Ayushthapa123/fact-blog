import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import styles from '../sass/index.module.scss'

import { createClient } from 'contentful';

import Social from '../components/social'
import Links from '../components/Links'
import Footer from '../components/Footer';





const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,

});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "facts",
  });

  return {
    props: {
      articles: data.items,
    },
    revalidate: 50,
  };
}







export default function Home( {articles}) {
  return (
    <>
    <div className={styles.homepage}>
      <Head>
        <title>FactsUmbrella</title>
        <meta name="description" content="Fun facts,Amazing facts, Psychological facts" />
        <link rel="icon" href="/favicon.png" />
      </Head>



  <Nav/>
  <Links/>
<Social/>



  <h1><span>|</span>FACTS</h1>

 
  <main className={styles.blogs}>
   
   {articles.map((article) => (
     <div key={article.sys.id}>
  

       <Link href={"/facts/" + article.fields.slug}>

         <a>
         
         <h2>|{article.fields.title}</h2>

         <div className={styles.imgcontainer}>
         {/* <Image src={'https:' + article.fields.coverphoto.fields.file.url} alt='Fact Image' className={styles.image}
          layout='fill'
         /> */}
          </div>

         </a>
       </Link> 
     </div> 
   ))}

</main>











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
    <Footer/>

    </>
  )
}
