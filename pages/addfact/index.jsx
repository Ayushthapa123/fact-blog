import React from 'react'
// import '../css/register.css';
import firebase from '../../firebase/firebase'
import { useState } from 'react';
import Head  from 'next/head';

import styles from '../../sass/addfact.module.scss'


import {useRouter} from 'next/router'


function Register() {

const db=firebase.firestore();
const storage=firebase.storage();


const router=useRouter();

const [name,setName]=useState('');
const [title,setTitle]=useState('');
const [slug,setSlug]=useState('');
const [description, setDescription]=useState('')
const [tag,setTag]=useState('');
const [subtag,setSubtag]=useState('');
const [ref,setRef]=useState('');
const [searchtag1,setSearchtag1]=useState('')
const [searchtag2,setSearchtag2]=useState('')
const [searchtag3,setSearchtag3]=useState('')

const [loader, setLoader]=useState(false);
const [error, setError]=useState(' ');

const types=['image/png', 'image/jpeg']
const [factImg, setFactImg]=useState(null);

const [newfact,setNewfact]=useState('');
const [newdes,setNewdes]=useState('');



const [facts, setFacts]=useState([]);
const [date,setDate]=useState();



const factImgHandler=(e)=> {
    let selectedFile=e.target.files[0];
    if(selectedFile && types.includes(selectedFile.type)) {
setFactImg(selectedFile);
setError('')
console.log('selectedfile',selectedFile)
    }else {
setFactImg(null);
setError('please select a valid image type png or jpeg or jpg');
    }
}



 


const handleSubmit=(e)=> {
    e.preventDefault();
    setLoader(true);

    
    const uploadTask = storage.ref(`fact-images/${name + factImg.name}`).put(factImg);
    uploadTask.on('state_changed', snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log(progress);
     
    }, err => setError(err.message)
        , () => {
            
            storage.ref('fact-images').child(name + factImg.name).getDownloadURL().then(url => {   


db.collection('facts')
.add({
    aareviewed:false,
    name:name,
    title:title,
    tag:tag,
    subtag:subtag,
    ref:ref,
    by:'Ayush Thapa',
    date:date,


    description:description,
    photoUrl: url,
    slug:slug,
 
    searchq:[name,searchtag1,searchtag2,searchtag3],
    facts:facts,
    keywords:[name,searchtag1,searchtag2,searchtag3],



})
.then(()=> {
    alert('Thanks for your fact we will review this post soon and release it and notify you & so you will be able to share it.')
    setLoader(false);
    document.getElementById("myform").reset();

    router.push('/');




}).catch((error)=> {
    alert(error.message);
    setLoader(false);
})


})

})

}


const addFact=(e)=> {

e.preventDefault();   
let newitem={fact:newfact,fdescription:newdes,by:'Ayush Thapa',reviewed:true,number:facts.length + 1}
let x=facts;
x.push(newitem);
setFacts(x);
setNewfact('');
setNewdes('');
alert('new fact added')
  

}





  return (
 
    <section className={styles.container}>

<Head>
        <title> Add facts </title>
</Head>



<section className={styles.description}>
 <h1>Add facts of your product or thing of interest</h1>   <hr/>
<p>This form is specially to those peoples who has proper knowledge or fact about something and 
    want to share knowledge or fact with the world. 
</p>

</section>

<section className={styles.body}>

    <section className={styles.form}>
<form onSubmit={handleSubmit} id='myform'>
  
<fieldset>
    <legend>Fact Details</legend>

<section className={styles.hosteldet}>

 <div>
    <label htmlFor='name'>Name*:</label><br/>
    <input type='text'   id='name' name='name' value={name} required minLength='5' maxLength='50'
    onChange={(e)=> setName(e.target.value)}/>  <br/>
</div>

 <div>
    <label htmlFor='title'>Title*:</label><br/>
    <input type='text'   id='title' name='title' value={title} required minLength='5' maxLength='90'
    onChange={(e)=> setTitle(e.target.value)}/>  <br/>
</div>

<div>
    <label htmlFor='slug'>Slug*:</label><br/>
    <input type='text'   id='slug' name='title' value={slug} required minLength='5' maxLength='90'
    onChange={(e)=> setSlug(e.target.value)}/>  <br/>
</div>

<div>
    <label htmlFor='tag'>Tag*:</label><br/>
    <input type='text'   id='tag' name='tag' value={tag} required minLength='5' maxLength='30'
    onChange={(e)=> setTag(e.target.value)}/>  <br/>
</div>

<div>
    <label htmlFor='subtag'>Subtag*:</label><br/>
    <input type='text'   id='subtag' name='tag' value={subtag} required minLength='5' maxLength='30'
    onChange={(e)=> setSubtag(e.target.value)}/>  <br/>
</div>

<div>
    <label htmlFor='ref'>Reference:</label><br/>
    <input type='text'   id='ref' name='ref' value={ref}  minLength='5' maxLength='30'
    onChange={(e)=> setRef(e.target.value)}/>  <br/>
</div>










 {/* <div>
    <label htmlFor='gtype'>Gender*:</label><br/>
    <select name='gtype'  value={gtype}  id='gtype'
    onChange={(e)=> setGtype(e.target.value)} required>
         <option> select</option>
        <option value='boys'>Boys</option>
        <option value='girls'>Girls</option>
    </select><br/>
    </div> */}

</section>
</fieldset>



<fieldset>
    <legend>Search Queries:*</legend>

<section className={styles.hosteldet}>

 <div>
    <input type='text'   id='search1' name='search1' value={searchtag1}  minLength='1' maxLength='50'
    onChange={(e)=> setSearchtag1(e.target.value)}/>  <br/>
</div>
<div>
  <input type='text'   id='search2' name='search2' value={searchtag2}  minLength='1' maxLength='50'
  onChange={(e)=> setSearchtag2(e.target.value)}/>  <br/>
</div>
<div>
  <input type='text'   id='search3' name='search3' value={searchtag3}  minLength='1' maxLength='50'
  onChange={(e)=> setSearchtag3(e.target.value)}/>  <br/>
</div>








</section>
</fieldset>




<section className={styles.des}>
<label htmlFor='description'>Describe Your fact* </label> <br/>
<textarea type='text'  id='description'  name='description' value={description}  placeholder='...'
onChange={(e)=> setDescription(e.target.value)}/>  <br/>

</section>

<section className={styles.hostelimage}>
<label htmlFor='product-img'>IMAGE* (jpg or png only)</label> <br/>
<input type='file' id='file'  onChange={factImgHandler} required />
<br/>
</section>


<div>
<input type='date'   id='date' name='date' value={date} 
  onChange={(e)=> setDate(e.target.value)}/>
</div>



<fieldset>
    <legend>Add facts:*</legend>

<section className={styles.addfact}>

 <div>
    <input type='text'   id='newfact' name='newfact' value={newfact}  minLength='5' 
    onChange={(e)=> setNewfact(e.target.value)}/>  <br/>
</div>

<section>

<textarea type='text'  id='newdes'  name='description'  value={newdes} placeholder='...'
onChange={(e)=> setNewdes(e.target.value)}/>  <br/>

</section>
<button onClick={addFact}>Add fact</button>



</section>
</fieldset>
<hr/>
<div className={styles.showfacts}>
{facts.map((fact)=> (
    <div key={fact.fact}>
        <li>{fact.number + fact.fact}</li>
     </div>
))}
</div>











<input type='submit' value='Submit' className={styles.submitbutton}/>

</form>
    </section>





    <section className={styles.guides}>
<h3>Guides to fill the form:</h3>
<ul>
    <li>All the fields with * are mendetory to fill </li>
    <li>URL's should be accurate</li>
    <li>Tick all the services you provide and </li>
  
</ul>
    </section>

</section>



 </section>

  );
}

export default Register;
