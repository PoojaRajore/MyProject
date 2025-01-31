import React from 'react';
import './Service.css';
import theme_pattern from "../../Assets/theme_pattern.svg";
import Services_Data from '../../Assets/services_data';
import arrow_icon from '../../Assets/arrow_icon.svg';
 const Service = () => {
  return (
    <div id='service' className='service'>
      <div className='service-title'>
        <h1>My Service</h1>
        <img src={theme_pattern} alt=''/>
      </div>
     <div className='service-container'>
      {Services_Data.map((service, index)=>{
        return<div key={index} className='service-format'>
          <h3>{service.s_no}</h3>
          <h2>{service.s_name}</h2>
          <p>{service.s_desc}</p>
          <div className='service-readmore'>
            <p> Read More</p>
            <img src={arrow_icon} alt=''/>
          </div>
          
          </div>
      })}
      </div> 
    </div>
  )
}
export default Service;