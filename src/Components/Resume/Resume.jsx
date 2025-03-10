import React from 'react'
import './Resume.css'
import ResumeBG from '../../assets/Resume.png'
import RCricle from '../../assets/new.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'



const Resume = () => {
  return (
    <section  style={{background:`url(${ResumeBG})center/cover no-repeat`}} className='Resume'>
    
    <div className="container">

         <div className="Resume_head"data-aos="zoom-in" data-aos-duration="2000">
          <h1>VIDEO <span>RESUME</span></h1>
         </div>

         <div className="video relative z-[10]">

           <div className="resume_madina">
            
            <div className="Resume_video">
            <iframe  src="https://www.youtube.com/embed/zqCoMGXzIHs?si=yOYpXu9eRO2ltKCO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              
            </div>

            <div className="pic_Cr" data-aos="zoom-in"
          data-aos-duration="1500">
             <img src={RCricle} alt="Circle"></img>
            </div>

           </div>
         </div>

         <div className="RHireme">
        <div className="reme flex gap-[6px] items-center">
        <button><Link to={'#'}><h2>HIRE ME</h2></Link></button>
        <FaArrowRightLong className='Arrow'/>
        </div>
        </div>

    </div>

    </section>
  )
}

export default Resume