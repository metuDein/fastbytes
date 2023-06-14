import React from 'react'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs'
import OurServices from './OurServices'
import Estimation from './Estimation'
import NewsLetter from './NewsLetter'

const Homepage = () => {
  return (
    <section className='main-pages'>
        <Hero />
        <WhyChooseUs />
        <OurServices />
        <Estimation />
        <NewsLetter />
    </section>
  )
}

export default Homepage 