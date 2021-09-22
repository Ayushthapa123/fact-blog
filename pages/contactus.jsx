import emailjs from "emailjs-com";
import React from 'react';
import styles from '../sass/contact.module.scss';

import Head from 'next/head'


export default function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_c1a0sst', 'template_s3lp672', e.target, 'user_knhqxsZVXvP2iAjVkQ8IY')
        .then((result) => {
      
        }, (error) => {
        
        });
        e.target.reset()
        alert('Thanks for contacting us we will look froward !!')
    }

    return(
        <div>
<Head>
        <title> Contact Factsumbrella.com </title>
</Head>






 <div className={styles.formcontainer}>
    

            <form onSubmit={sendEmail}>
            <h1>Contact Us</h1>
                <p>Please provide your real information with clear reason of contact.</p>

                   
                        <div >
                            <input type="text" placeholder="Name" name="name" required minLength='2' maxLength='50'/>
                        </div>

                        <div >
                            <input type="text" className="form-control" placeholder="Phone No" name="subject" required  minLength='8' maxLength='15'/>
                        </div>
                        <div>
                            <input type="email" placeholder="Email Address" name="email" required/>
                        </div>
                        <div>
                            <textarea id="contact-text" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div>
                          <button type='submit' >Request a call</button>
                           
                        </div>
            
                </form>
            
            </div>
        </div>
    )
}