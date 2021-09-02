import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import firebase from '../../firebase/firebase'


import styles from '../../sass/blogsindex.module.scss'

export default function Bworld() {
    const [bdata,setBdata]=useState([]);
    const bitems=[];
    const db=firebase.firestore();
    
    let ref=db.collection('facts').where("tag","==",'business');
    
    
      ref.onSnapshot((querySnapshot)=> {
        querySnapshot.forEach((doc)=> {
          bitems.push(doc.data());
        });
        setBdata(bitems);
      })
    




  return (
    <div>

<Head>
<title>Hostels</title>

{/* write article for 'search hostel',' what is hostel?' 'types of hostel'*/}
</Head>
<h1>Entrepreneurs</h1>
    <div className={styles.blogs}>




      
          {bdata.map((hostel) => (
            <div key={hostel.email} className={styles.links}>
                <h3> {hostel.name}</h3>
              <Link href={"/bworld/" + hostel.slug} >
                <a>
                  <img src={hostel.hostelImg} alt='hostel image' loading='lazy'/>
                
            
                <span>{hostel.name}</span>
                </a>
              </Link>
            </div>
          ))}
     
  

     </div>
    </div>
  );
}
