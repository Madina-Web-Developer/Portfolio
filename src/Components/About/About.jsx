import React from 'react'
import './About.css'
import Aboutimg from '../../assets/About.png'
import { Link } from 'react-router'
import AnimatedCoursor from '../CouserEffect/AnimatedCoursor'




const About = () => {

  return (

    <section style={{background:`url(${Aboutimg})center/cover no-repeat`}} className='About_Mina'>
    <AnimatedCoursor/>
     <div className="container">

      <div className="all_mina">

        <div className="left_about">
           <div className="about_img">
            <img src="" alt="" />
            <div></div>
           </div>
        </div>

        <div className="right_about">
           <div className="about_me">
           <h1>
            <span>About</span>
            Me
           </h1>
           </div>
           <div className="intro">
            <h2>I’M AVAILABLE FOR<span>REACT</span>WEB DESIGN & DEVELOPMENT<span>PROJECTS</span></h2>
           </div>

           <div className="main_about">
            <p>I am a dedicated and professional website designer and developer with a strong focus on creating user-friendly and modern responsive websites. I am a strong communicator and problem solver. I approach to clean code structure and ability to work efficiently under pressure make you a reliable choice for clients looking to enhance their projects.</p>
           </div>

           <div className="hireme">
            <button><Link to={'#'}>Hire me</Link></button>
           </div>
        </div>

      </div>

     </div>

    </section>
  )
}

export default About