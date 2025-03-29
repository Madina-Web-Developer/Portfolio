import React from 'react'
import './Skills.css'
import Skillsbg from '../../assets/SkillsBG.png'
import Skill from '../../assets/new.png'
import react from '../../assets/React.png'
import tailwind from '../../assets/Tailwind.png'
import redux from '../../assets/Redux.png'
import js from '../../assets/JS.png'
import html from '../../assets/HTML.png'
import css from '../../assets/CSS.png'
import firebase from '../../assets/Firebase.png'
import data from '../../assets/Data.png'
import user from '../../assets/User.png'
import api from '../../assets/API.png'
import Bootstrap from '../../assets/Bootstrap.png'

const Skills = () => {
  return (
   <section id='Skills' style={{background:`url(${Skillsbg})center/cover no-repeat`}} className='Skills_Mina'>

   <div className="container">

      <div className="Skills_header">
        <div className="Scrcl">

        </div>
        <div className="s_h">
        <h1>MY <span>SKILLS</span></h1>
        </div>
      </div>

      <div className="all_Skills">

        <div className="one_side">
        
        <div data-aos="fade-up"
        data-aos-duration="1000">
        <div className="sing_skill">
            <img className='react' src={react} alt="react" />
            <div className="examp">
            <h2>React</h2>
            <h3>Proficient in building dynamic and interactive user interfaces using React.</h3>
            </div>
        </div>
        </div>

        <div data-aos="fade-up"
        data-aos-duration="1000">
        <div className="sing_skill">
            <img className='redux' src={redux} alt="react" />
            <div className="examp">
            <h2>Redux</h2>
            <h3>Experienced in managing complex application states efficiently with Redux.</h3>
            </div>
        </div>
        </div>

        <div data-aos="fade-up"
        data-aos-duration="1000">
        <div className="sing_skill">
            <img className='Tailwindcss' src={js} alt="react" />
            <div className="examp">
            <h2>JavaScript</h2>
            <h3>Skilled in JavaScript for developing dynamic and interactive web applications.</h3>
            </div>
        </div>
        </div>
        
        <div data-aos="fade-up"
        data-aos-duration="1000">
        <div className="sing_skill">
            <img className='Tailwindcss' src={tailwind} alt="react" />
            <div className="examp">
            <h2>Tailwind CSS</h2>
            <h3>Proficient in using Tailwind CSS for rapid and responsive UI development.</h3>
            </div>
        </div>
        </div>
        
        <div data-aos="fade-up"
        data-aos-duration="1000">
        <div className="sing_skill">
            <img className='Tailwindcss' src={user} alt="react" />
            <div className="examp">
            <h2>User Authentication</h2>
            <h3>Experienced in implementing secure user authentication and access control systems.</h3>
            </div>
        </div>
        </div>
       

        </div>

        <div className="two_side">
        
        <div data-aos="fade-up"
        data-aos-duration="1000">
        <div className="sing_skill">
            <img className='react' src={html} alt="react" />
            <div className="examp">
            <h2>HTML</h2>
            <h3>Proficient in creating structured and accessible web content using HTML.</h3>
            </div>
        </div>
        </div>

        <div data-aos="fade-up"
        data-aos-duration="1000">
        <div className="sing_skill">
            <img className='redux' src={css} alt="react" />
            <div className="examp">
            <h2>CSS</h2>
            <h3>Skilled in designing visually appealing and responsive web layouts with CSS</h3>
            </div>
        </div>
        </div>


        <div data-aos="fade-up"
        data-aos-duration="1000">
        <div className="sing_skill">
            <img className='Tailwindcss' src={firebase} alt="react" />
            <div className="examp">
            <h2>Firebase</h2>
            <h3>Skilled in using Firebase for real-time database, authentication, and hosting solutions.</h3>
            </div>
        </div>
        </div>

        <div data-aos="fade-up"
        data-aos-duration="1000">
        <div className="sing_skill">
            <img className='Tailwindcss' src={data} alt="react" />
            <div className="examp">
            <h2>Realtime Database</h2>
            <h3>Experienced in handling real-time data synchronization using Firebase Realtime Database.</h3>
            </div>
        </div>
        </div>
 
        <div data-aos="fade-up"
        data-aos-duration="1000">
        <div className="sing_skill">
            <img className='Tailwindcss' src={api} alt="react" />
            <div className="examp">
            <h2>API Integration</h2>
            <h3>Proficient in integrating and managing external APIs for seamless application functionality.</h3>
            </div>
        </div>
        </div>

        </div>

        

      </div>
      <div data-aos="fade-up"
        data-aos-duration="1000">
      <div className="sing_skill">
            <img className='Bootstrap' src={Bootstrap} alt="react" />
            <div className="examp">
            <h2>Bootstrap</h2>
            <h3>Experienced in utilizing Bootstrap for mobile-first and responsive web design.</h3>
            </div>
        </div>
        </div>

   </div>
   </section>
  )
}

export default Skills