import React from 'react'
import styles from './ContactStyles.module.css'

function Contact() {
    return (
        <section id='contact' className={styles.container}>
            <h1 className='sectionTitle'>Contact</h1>

            {/* I am using formspree.io for contact form, cuz it is FREE !!! */}
            <form action="https://formspree.io/f/mvoejgrp" method='post'>
                <div className='formGroup'>
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input type="text" name='name' id='name' placeholder='Full Name' required />
                </div>

                <div className='formGroup'>
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input type="text" name='mail' id='mail' placeholder='Email' required />
                </div>

                <div className='formGroup'>
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea name='message' id='message' placeholder='Message' required></textarea>
                </div>
                <input className='hover-btn' type="submit" value='submit' />

            </form>
        </section>
    )
}

export default Contact