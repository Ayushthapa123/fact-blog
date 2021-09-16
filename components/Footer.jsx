import React from 'react';
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,} from "react-icons/fa";
import {AiFillMessage} from 'react-icons/ai'
// import '../css/footer.css';

import Links from '../components/Links'


function Footer() {
  return (
    <div className='footer'>

      <Links/>
<div className='footer-container'>

  <footer>
<div className='left-footer'>

<h3 className='foot-title'>contact info</h3>

<hr/>

<hr/>


<p className='foot-p'>Email:</p>
<p>factsumbrella@gmail.com</p>


  </div>    


<div className='right-footer'>

<h3 className='foot-title'>Pages</h3>

<li><a href='/'>Blogs</a></li>

<li><a href='/'>Login</a></li>

</div>

<div className='social-icons'>

<h3 className='foot-title'>We are social</h3>
<a href='https://www.facebook.com/factsumbrella/'><FaFacebookSquare/></a>
<a href='https://www.facebook.com/factsumbrella/'>< AiFillMessage/></a>
<a href='/'><FaInstagramSquare/></a>
<a href='/'><FaTwitterSquare/></a>


<hr/>

<h3 className='foot-title'>Our Community</h3>
{/* <li><a href='/'>Community</a></li> */}
<li><a href='/terms-and-condition'>Tearm and Condition</a></li>
<li><a href='/privacy-policy'>Privacy Policy</a></li>

</div>



</footer>

</div>
<div className='super-footer'>
  <h2>FactsUmbrella</h2>
{/* 
<p><a href='https://www.growwebtech.com/'>@Grow web technologies </a></p> */}



</div>
    </div>
  );
}

export default Footer;