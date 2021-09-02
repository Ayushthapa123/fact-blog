import React, {useState,useEffect} from 'react'
import styles from './sass/nav.module.scss'
import firebase from '../firebase/firebase'

export default function Nav() {

    const [name,setName]=useState('');
    const [data,setData]=useState([]);
const items=[];

const db=firebase.firestore();



  const handleSubmit=(e)=> {
    e.preventDefault()
  getData();
  }
  const handleEnter=(e)=> {
    e.preventDefault()
    if(e.keyCode==13) {
  getData();
    }
  }

  function getData() {

  
  const ref=db.collection('facts').where('searchq' , 'array-contains',name)
    ref.onSnapshot((querySnapshot)=> {
     
      querySnapshot.forEach((doc)=> {
        items.push(doc.data());
      });
      setData(items);
    })
  }


useEffect(()=> {
getData();
console.log(data)
},[])

    return (
        <>
        <div className={styles.nav}>
            {/* <div className={styles.logo}>
                <img src='/logo2.png' alt='Logo'/>
            </div> */}
            <div className={styles.searchbar}>
            <input type='search' placeholder='Search Facts' onKeyUp={(e)=>handleEnter(e)}
           id='name'  value={String(name)} 
            onChange={(e)=> setName(e.target.value.toLowerCase(e.target.value))} 
            
            />
            <button onClick={(e)=>handleSubmit(e)}>Search</button>
            </div>
        </div>
        <div className={styles.searchresult}>

{data.map((data)=> (
 
        <div key={data.name} className={styles.links}>
            <a href={'/' + data.tag +'/'+ data.slug}><h3 >{data.title}<br/><span>{data.subtag}</span></h3></a>

        </div> 

    ))
}

        </div>




        </>
    )
}
