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

  let data2 = await client.getEntries({
    content_type: "funfacts",
  });

  return {
    props: {
      articles: data.items,
      articles2:data2.items,
    },
    revalidate: 50,
  };
}





export default function Home({articles,articles2}) {
  return (
    <>
    <div className={styles.homepage}>
      <Head>
        <title>FactsUmbrella</title>
        <meta name="description" content="Fun facts,Amazing facts, Psychological facts" />
        <link rel="icon" href="/favicon.png" />
        <meta name="google-site-verification" content="YHGwBPoFZZz4vmKV720TaZf4vwvLVU5lqDDIOLAgBxw" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9683433840347502"
     crossorigin="anonymous"></script>
    



      </Head>



  <Nav/>
  <Links/>
<Social/>



  <h1><span>|</span>FACTS</h1>

  <h2><span>|</span>Facts</h2>
  <main className={styles.blogs}>
   
   {articles.map((article) => (
     <div key={article.sys.id}>
  

       <Link href={"/facts/" + article.fields.slug}>

         <a>
         
         <h2>|{article.fields.title}</h2>

         <div className={styles.imgcontainer}>
         <Image src={'https:' + article.fields.coverphoto.fields.file.url} alt='Fact Image' className={styles.image} layout='fill'
       
         />
          </div>

         </a>
       </Link> 
     </div> 
   ))}

</main>











  <h2><span>|</span>Fun Facts</h2>

  <div className={styles.blogs}>
   
   {articles2.map((article) => (
     <div key={article.sys.id}>
  

       <Link href={"/funfacts/" + article.fields.slug}>

         <a>
         
         <h2>|{article.fields.title}</h2>

         <div className={styles.imgcontainer}>
         <img src={'https:' + article.fields.coverphoto.fields.file.url} alt='Fact Image' className={styles.image}
       
         />
          </div>

         </a>
       </Link> 
     </div> 
   ))}

</div>







    </div>
    <Footer/>

    </>
  )
}
