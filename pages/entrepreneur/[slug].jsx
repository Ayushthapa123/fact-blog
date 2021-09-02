import React, { useRef, useState,useEffect } from "react";
import firebase from '../../firebase/firebase'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../sass/slugs.module.scss'
import Layout from '../../components/templates/factTemplate'

const db=firebase.firestore();

export const getStaticPaths = async () => {
  const entries = await db.collection("facts").where('tag','==','business').get()
  const paths = entries.docs.map(entry => ({
    params: {
      slug: entry.data().slug
    }

  }));
  return {
    paths,
    fallback:true
  }
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await db.collection("facts").where("slug", "==", slug).get()
  // setDocid(doc.id);
  const facts = res.docs.map(fact => fact.data());

  if (facts.length) {
    return {
      props: {
        facts: facts[0]
      }
    }
  } else {
    return {
      props: {}
    }
  }
}


export const Post = (props) => {
  const { facts } = props;



  const router = useRouter()
  if (router.isFallback) {
    return (
      <div>loading...</div>
    )
} else {   
    if (facts) {
      return (
<div>
<Head>
<title>{facts.name}</title>
</Head>

<Layout>
<div className={styles.facts}>


<h1>Awesome {facts.title}</h1><hr/>
<div className={styles.intro}>
<div className={styles.factimg}>
  <img src={facts.photoUrl} alt='fact image'loading='lazy' />
</div>


<div className={styles.details}>
<h2>{facts.name}</h2>
<h4>{facts.subtag}</h4>
<h5>{facts.description}</h5>
</div>


</div>
{facts.facts.map((fact)=> (
  <div key={fact.number}>
    <h3>{ fact.fact}</h3>
    <p>{fact.fdescription}</p>
  </div>
))}

</div>
</Layout>
</div>
);
} else {
      return (
        <div>not found anything</div>
      )
    }
  }
};


export default Post;




