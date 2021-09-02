import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Head from 'next/head';
import { createClient } from 'contentful';
import Layout from '../../components/templates/Blogtemplate';
import styles from '../../sass/slugs.module.scss';



const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,

});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "funfacts",
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback:false,
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "funfacts",
    "fields.slug": params.slug,
  });

  return {
    props: {
      article: data.items[0],
    },
    revalidate:50, 
    // Incremental page re-generation after deployment
  };
}

export default function Article({ article }) {
  if (!article) return <div>404</div>;



  return (
    <div className='blog-post'>

<Head>
  <title>{article.fields.title}</title>
</Head>

<Layout>

<div className={styles.header}>
<h1>{article.fields.title}</h1>
<p>Published date: {article.fields.date} </p>
</div>

   <section className={styles.content}>
      <div className={styles.article}>
        {documentToReactComponents(article.fields.body,
        
        {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <img
              alt='image'
                src={"https:" + node.data.target.fields.file.url}
                width={node.data.target.fields.file.details.image.width}
                height={node.data.target.fields.file.details.image.height}
              />
            ),
          },
        }
        
        )}
      </div>

<div className={styles.sidebar}>
{/* <h2>Grow Web Technology</h2> */}
</div>

 </section>

 </Layout>


      <style jsx>{`
        .blog-post {
         width:95%;
         margin:auto;
        }
      `}</style>



    </div>
  );
}
