import React from 'react';
import "./Hero.css";
import profilepicture2 from '../../Assets/profilepicture2.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
  const Hero =() => {
  return (
    <div id='hero' className='hero'>
        <img src={profilepicture2} alt=''/>
 <h1><span>Hello , I'm Pooja Rajore,</span> frontend developer and web designer</h1>
 <p>I am a frontend developer from India,</p>
 <div className='hero-action'>
  <div className='hero-connect'><AnchorLink className='anchor-link'  offset= {50} href="#Contact" >Connect with me </AnchorLink></div>
  <div className='hero-resume'> My resume</div>
 </div>
    </div>
  );
}

export default Hero;