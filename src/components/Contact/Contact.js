import React from 'react'
import './Contact.css';
import theme_pattern from '../../Assets/theme_pattern.svg';
import mail_icon from '../../Assets/mail_icon.svg';
import call_icon from '../../Assets/call_icon.svg';
import location_icon from '../../Assets/location_icon.svg';
import linked1 from '../../Assets/linked1.png';
import git3 from '../../Assets/git3.jpeg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0234f3b1-c6b6-4a4e-8bce-2731a9e2adfd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert("Email sent successfully");
    }
  };
  return (
    <div id='Contact' className='Contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt=''/>
      </div>
            <div className='contact-section'>
              <div className='contact-left'>
                <h1> Let's  Talk </h1>
                <p> I'm currently avaliable to take on new projects,so feel free to connect with me</p>
                <div className='contact-details'>
                  <div className='contact-detail'>
<img src={mail_icon} alt=''/>
<p>rajorekhushi72@gmail.com</p>
                  </div>
                  <div className='contact-detail'>
<img src={call_icon} alt=''/>
<p>9752541395</p>
                  </div>
                  <div className='contact-detail'>
<img src={location_icon} alt=''/>
<p>scheme no 78 Indore M.p</p>

                  </div>
                  <div className='linkedin'>
              <a href ="https://www.linkedin.com/in/pooja-rajore-b52a0a2b2/"> <img src={linked1} alt=''/> </a>
                    <p> My linkedin Profile.....Click on image</p>
                  </div>
                  <div className='git'>
                 <a href='https://github.com/PoojaRajore'><img src={git3} alt=''/></a>
                    <p>My Github Profile....Click on image</p>
                  </div>
                </div>
              </div>
              <form onSubmit = {onSubmit} className='contact-right'>
                <label htmlFor=''> Please Enter Your Name</label>
                <input type='text' placeholder='Enter your name' name='name' required/>
                <label htmlFor=''> Please Enter Your Email</label>
<input type='email' placeholder='Enter your Email' name='email' required/>
               <label htmlFor=''>Write Your Message Here..... </label>
<textarea name='message' rows='8' placeholder='Enter your message' required></textarea>
<button type ='submit' className='contact-submit'>Submit</button>
            </form>
            </div>
        </div>
    
  )
}
export default Contact;
