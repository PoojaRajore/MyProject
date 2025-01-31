import React from 'react';
import './Footer.css';

import mylogo from '../../Assets/my logo.jpeg';

 const Footer = () => {
  return (
    <div  id=' Footer' className='Footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
            <img src={mylogo} alt=''/>        
<p>I am fresher frontend developer & Web designer from India,</p>
<hr/>
                </div>
                

</div>
<div className='footer-bottom'>
    <div className='footer-bottom-left'>
       <p> @2024 Pooja Rajore. All rights reserved</p>
        
      <div className='footer-bottom-right'>
 
<p>Term of Services</p>
<p> Privacy Policy</p>
<p> Connect with me</p>

</div>
    </div>
</div>
        </div>

  )
}
export default Footer;