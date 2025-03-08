import React from 'react'
import './Resume.css'
import ResumeBG from '../../assets/Resume.png'
import resumeVideo from '../../assets/Madina.png'
import RCricle from '../../assets/new.png'
import YOUTUBE from '../../assets/Youtube2.png'
import { Link } from 'react-router'


const Resume = () => {
  return (
    <section  style={{background:`url(${ResumeBG})center/cover no-repeat`}} className='Resume'>
    
    <div className="container">

         <div className="Resume_head"data-aos="zoom-in" data-aos-duration="2000">
          <h1>Video <span>Resume</span></h1>
         </div>

         <div className="video relative z-[10]">

           <div className="resume_madina">
            <img src={resumeVideo} alt="resumemadina"/>

            <div className="youtube">
                <img src={YOUTUBE} alt="picture" />
              </div>

            <div className="pic_Cr" data-aos="zoom-in"
          data-aos-duration="1500">
             <img src={RCricle} alt="Circle"></img>
            </div>
              
             

           </div>
         </div>

    </div>

    </section>
  )
}

export default Resume