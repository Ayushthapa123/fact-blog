import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import { createClient } from 'contentful';

import styles from '../../sass/blogsindex.module.scss'

import FactTemplate from '../../components/templates/factTemplate'



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

export default function Home({ articles }) {

// console.log(articles[0])
// console.log(articles[0].fields.coverphoto.fields.file.details.image.height)

  return (
    <div className='blog-list'>
      <Head>
        <title>Facts</title>
    
      </Head>

<FactTemplate>

      <main className={styles.blogs}>
   
          {articles.map((article) => (
            <div key={article.sys.id}>
         

              <Link href={"/facts/" + article.fields.slug}>

                <a>
                
                <h2>|{article.fields.title}</h2>

                <div className={styles.imgcontainer}>
                <Image src={'https:' + article.fields.coverphoto.fields.file.url} alt='Fact Image' className={styles.image}
                 layout='fill'
                />
                 </div>

                </a>
              </Link> 
            </div> 
          ))}
    
      </main>
      </FactTemplate>



   

    </div>
  );
}
