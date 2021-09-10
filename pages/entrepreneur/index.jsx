import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import firebase from '../../firebase/firebase'


import styles from '../../sass/blogsindex.module.scss'

export default function Bworld() {
    const [bdata,setBdata]=useState([]);
    const bitems=[];
    const db=firebase.firestore();
    
    let ref=db.collection('facts').where("tag","==",'entrepreneur');
    
    
      ref.onSnapshot((querySnapshot)=> {
        querySnapshot.forEach((doc)=> {
          bitems.push(doc.data());
        });
        setBdata(bitems);
      })
    




  return (
    <div>

<Head>
<title>Entrepreneurs</title>

</Head>
<h1>Entrepreneurs</h1>
    <div className={styles.blogs}>




      
          {bdata.map((person) => (
            <div key={person.email} className={styles.links}>
                <h3> {person.name}</h3>
              <Link href={"/entrepreneur/" + person.slug} >
                <a>
                  <img src={person.photoUrl} alt='Image' loading='lazy'/>
                
            
                <span>{person.description}</span>
                </a>
              </Link>
            </div>
          ))}
     
  

     </div>
    </div>
  );
}
