import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section
    className='hero' style={{ }}>
        <div className='app--intro'> 
            <h1 className='page--intro'> Welcome to FastBytes, your <br /> one-stop destination for efficient logistics solutions! </h1>
            <Link> Track Goods </Link>
        </div>
    </section>
  )
}

export default Hero