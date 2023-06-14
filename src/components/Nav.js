import React, {useEffect, useState} from 'react';

import { Link } from 'react-router-dom'

import {FaBars} from 'react-icons/fa'






const Nav = () => {
  const [headerStyle, setHeaderStyle] = useState({});
  const [scrollY, setScrollY] = useState(0);

  const [menuTab, setMenuTab] = useState(false);


  useEffect(() => {
    const handleScroll = () => {

      let style;
      const currentScrollHeight = window.scrollY
      setScrollY(currentScrollHeight);
      

      scrollY > 5 ? style = {
        background : 'black'
      } : style  = {}
      setHeaderStyle(style)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const handleMenu = () => {
    setMenuTab(old => !old)
  }

  return (
    <header className='header' style={headerStyle}>
      <div className='contact--tab'>
        <span> Email us at : info@fastbyes.com</span>
        <span></span>
      </div>
        <nav className='nav--bar'>
            <div className='nav--logo'>
               
                <h1>FastBytes</h1>
            </div>

            <ul className={`drop-down ${menuTab ? 'active'  : ''}`}>
                <li> <Link to={'/'}>Home</Link> </li>
                <li> <Link to={'/about-us'}>About</Link> </li>
                <li> <Link to={'/#services'}>Services</Link> </li>
                <li> <Link to={'/tracking'}>Track your Order</Link> </li>
                <li> <Link to={'/request-quote'}>Request a Quote</Link> </li>
                <li> <Link to={'/contact-us'}>Contact Us</Link> </li>

            </ul>
            <span className='menuBtn'>
              <FaBars style={{color :'#fff', fontSize : '25px'}} onClick={handleMenu}/>
            </span>
        </nav>
    </header>
  )
}

export default Nav