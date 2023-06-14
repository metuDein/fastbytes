import React from 'react'
import { Link } from 'react-router-dom'

const AboutUS = () => {
    return (
        <section className='request--section contact-sect'>

            <article className='form--banner aboutus'>
            </article>

            <div className='about--div'>
                <img src="images/project-6.jpg" alt="" />
                <article className='about--article'>
                    <h1 className='about--title'> About Us</h1>
                    <p>
                        The company estabilished in 1992 by a dedicated young team. In year of 2011 management totally delivered to Taskoparan family, who based in Istanbul old city since 1880s.

                        After 2011, the company did several reconstructions and got a very fast progress and undersigned too many new innovations in marketing by developing new products and management areas.

                        Bosmar Trans provides several productive contrubutions to our country’s freight forwarding industry during the last quarter century. Developed so many new useful tools and educated so many logisticians.
                    </p>
                        <Link> Contact Us </Link>
                </article>
            </div>
            <article className='contact--sect'>
            <h1> Location</h1>
                <div className='address--card'>
                    <h3>Head Office</h3>
                    <ul>
                        <li>44 avenue greensburg,</li>
                        <li> A Blok, Kat: 1, No: 3 Maltepe</li>
                        <li>United – kingdom</li>
                    </ul>
                    
                </div>
            </article>

        </section>
    )
}

export default AboutUS