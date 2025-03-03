import React from 'react'
import './About.css'
import AboutBanner from '../../assets/About.png'
import { Link } from 'react-router'
import AnimatedCoursor from '../CouserEffect/AnimatedCoursor'
import Aboutimg from '../../assets/Aboutimg.png'
import SmallC from '../../assets/new.png'




const About = () => {

  return (

    <section style={{background:`url(${AboutBanner})center/cover no-repeat`}} className='About_Mina'>
    <AnimatedCoursor/>
     

     <div className="container">

      <div className="all_mina">

        <div className="left_about relative z-[10]">
           <div className="about_img"
           
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="1500"
           
           >
            <img className='mypicture' src={Aboutimg} alt="aboutmepng" /> 
            <div className='circle'
            data-aos="zoom-in"
            data-aos-duration="2000">
           <img src={SmallC} alt="smaill" />
           </div>
        
           </div>
        </div>
          

        <div className="right_about relative">
           <div className="about_me">
           <h1>About <span>Me</span></h1>
           </div>

           <div
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="1200"
           >
           <div className="intro">
            <h2>I’M AVAILABLE FOR<span>REACT</span>WEB DESIGN & DEVELOPMENT<span>PROJECTS</span></h2>
           </div>

           <div className="main_about">
            <p>I am a dedicated and professional website designer and developer with a strong focus on creating user-friendly and modern responsive websites. I am a strong communicator and problem solver. I approach to clean code structure and ability to work efficiently under pressure make you a reliable choice for clients looking to enhance their projects.</p>
           </div>

           </div>

           <div className="hireme">
            <button><Link to={'#'}>Hire me</Link></button>
           </div>

           <div className='SmallC' data-aos="zoom-in"
          data-aos-duration="1500">
          <img src={SmallC} alt="smaill" />
    </div>
        </div>

      </div>

     </div>

    </section>
  )
}

export default About