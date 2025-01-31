import React, { useRef, useState }   from 'react'
import './Navvbar.css';
//import poojalogo2 from '../../Assets/poojalogo2.jpeg';
import mylogo from '../../Assets/my logo.jpeg';
import underline from '../../Assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../Assets/menu_open.svg';
import menu_close from '../../Assets/menu_close.svg';
const Navbar = () => {
    const [menu ,setMenu] =useState("home");
    const menuRef= useRef();
    const openMenu=()=>{
      menuRef.current.style.right='0';
    }
    const closeMenu=()=>{
      menuRef.current.style.right='-350px'
    }
    // here in link part firstly we create two state menu or setmenu  and after that we install anchor link  smooth scroll package and then we pass the link  by using  href= #id  of different pages so we can esay move on 
  return (
    <div className='Navbar'>
    <img src={mylogo} alt="" />
    <img src={menu_open} onClick={openMenu} alt='' className='menu-open'/>
    <ul ref={menuRef} className="nav-menu">
      <img src={menu_close}  onClick={closeMenu} alt='' className='menu-close'/>
     <li><AnchorLink className='anchor-link' href='#hero' ><p onClick={()=>setMenu('home')}> Home</p></AnchorLink>{menu==='home'? <img src={underline} alt=''/> :<></>} </li>

     <li><AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick={()=>setMenu('about')}>About Me</p>
     </AnchorLink>{menu==='about'? <img src={underline} alt=''/> :<></>} </li>

     <li><AnchorLink className='anchor-link' offset={50} href='#service'> <p onClick={()=>setMenu('services')}> Services</p> 
     </AnchorLink>{menu==='services'? <img src={underline} alt=''/> :<></>} </li>

     <li><AnchorLink className='anchor-link'  offset={50} href='#mywork'> <p onClick={()=>setMenu('portfolio')}>Portfolio</p>
     </AnchorLink> {menu==='portfolio'? <img src={underline} alt=''/> :<></>} </li>

     <li> <AnchorLink className='anchor-link'  offset ={50} href='#Contact'><p onClick={()=>setMenu('contact')}>Contact</p>
     </AnchorLink> {menu==='contact'? <img src={underline} alt=''/> :<></>} </li>
  </ul>
    <div className='nav-content'><AnchorLink className='anchor-link' offset={50} href="#Contact" >Connect With me </AnchorLink></div>
  </div>
  )
}
export default Navbar;