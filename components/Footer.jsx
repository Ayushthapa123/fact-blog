import React from 'react'
import Link from 'next/link'
import styles from './sass/footer.module.scss'

export default function Footer() {
  return (

<>
<hr/>
    <div className={styles.footer}>
    
 <div>
<h2>TOPICS</h2>
<p><Link href='/funfacts'><a>Fun Facts</a></Link></p>
<p><Link href='/entrepreneur'><a>Entrepreneur Facts</a></Link></p>
<p><Link href='/businessideas'><a>Business Ideas</a></Link></p>
       
</div>
      
<div>
<h2>SECTIONS</h2>
</div>

<div>
<h2>FACTSUMBRELLA.COM</h2>
<p><a href='/contactus/'>Contact Us</a></p>
<p><a href='/aboutus/'>About Us</a></p>
<p><a href='/privacy-policy/'>Privacy Policy</a></p>
<p><a href='/terms-and-condition/'>Tearms & Conditions</a></p>



</div>
    </div>
<div className={styles.superfooter}>
<hr/>
<a href='/privacy-policy/'>Privacy Policy</a>
<a href='/terms-and-condition/'>Tearms & Conditions</a>
<a href='/contactus/'>Contact Us</a>
<a href='/aboutus/'>About Us</a>

<hr/>
<div className={styles.copyright}>
<span>All copyright reserved to</span><a href='https://www.factsumbrella.com/'>@factsumbrella</a>
</div>
</div>

</>

  )
}
