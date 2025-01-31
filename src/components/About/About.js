import React from 'react'
import "./About.css";
import theme_pattern from '../../Assets/theme_pattern.svg';
import profilepicture2 from '../../Assets/profilepicture2.jpeg';
const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt=''/>
            </div>
            <div className='about-section'>
                <div className='about-left'>
                    <img src={profilepicture2} alt=''/>
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>I am Fresher frontend developer, I like to craft solid and scalable frontend designs.I Like making fun interactive things with code. </p>
                        <p> I am more passionate for development  And always eager to learn & create something new and unique </p>

                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS<hr style={{width:"250%"}}/></p></div>
                        <div className='about-skill'><p>JAVASCRIPT<hr style={{width:"180%"}}/></p></div>
                    
                        <div className='about-skill'><p>REACT JS<hr style={{width:"150%"}}/></p></div>
                        <div className='about-skill'><p>JAVA<hr style={{width:"220%"}}/></p></div>
                        <div className='about-skill'><p>MYSQL DB<hr style={{width:"195%"}}/></p></div>


                        </div>
                    </div>
                </div>
    
                </div>
            
    
  )
}
export default About;
