import React from 'react'
import styles from './About.module.css'

export default function About() {
    return (
        <section id='about' className={styles.container}>
            <h1 className='sectionTitle'>About</h1>
            <div className={styles.aboutContainer}>
                <h3>Original Name: Phuc Thien Ngo</h3>
                <h3>Prefered Name: Lavy Ngo</h3>
                <h3>Nationality: Vietnamese</h3>
                <h3>Graduated: Bachelor of Science and Master of Science <br /> at University of Missouri - Kansas City</h3>
                <h3>Hobbies: Photograph, Guitar, Sports</h3>
            </div>
        </section>
    )
}
