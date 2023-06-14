import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='app--footer'>
      <div className='footer-desc'>
        <h1> <Link>Fast Bytes</Link></h1>
        <p>Delivering reliable logistics solutions with speed and precision.We are dedicated to providing reliable and efficient solutions for your shipping and transportation requirements. Our experienced team is committed to ensuring the safe and timely delivery of your goods. </p>
      </div>
      <div className='quick--links'>
        <h2>Quick Links</h2>
        <ul>
          <li><Link to={'/request-quote'}>Request a Quote</Link></li>
          <li><Link to={'/tracking'}>Track Goods</Link></li>
          <li><Link to={'/contact-us'}>Contact US</Link></li>
          <li><Link to={'/about-us'}>About </Link></li>
          <li><Link to={'/admin-panel'}>Admin </Link></li>
        </ul>
      </div>
      <div className='quick--links'>
        <h2>Reach us</h2>
        <p><span><img src="https://cdn.onlinewebfonts.com/svg/img_525261.png" alt="" /></span> 44 Grennsburg Avenue United Kingdom </p>
        <p><span><img src="https://cdn.onlinewebfonts.com/svg/img_489898.png" alt="" /></span> Eron1242@gmail.com </p>
        <p><span><img src="https://svgsilh.com/svg/651704.svg" alt="" /></span> +13245678956 </p>
      </div>
    </footer>
  )
}

export default Footer