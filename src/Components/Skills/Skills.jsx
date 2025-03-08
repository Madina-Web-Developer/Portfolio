import React from 'react'
import './Skills.css'
import Skillsbg from '../../assets/SkillsBG.png'
import SkillC from '../../assets/new.png'
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
   <section  style={{background:`url(${Skillsbg})center/cover no-repeat`}} className='Skills_Mina'>

   <div className="container">

      <div className="Skills_header">
        <div className="Scrcl">
            <img src={SkillC} alt="skillcircle"/>
        </div>
        <div className="s_h">
        <h1>SKILLS</h1>
        </div>
      </div>

      <div className="all_Skills" data-aos="fade-up"
     data-aos-duration="1000">

        <div className="one_side">

        <div className="sing_skill">
            <img className='react' src={react} alt="react" />
            <h2>React</h2>
        </div>

        <div className="sing_skill">
            <img className='redux' src={redux} alt="react" />
            <h2>Redux</h2>
        </div>

        <div className="sing_skill">
            <img className='Tailwindcss' src={js} alt="react" />
            <h2>Java Script</h2>
        </div>

        <div className="sing_skill">
            <img className='Tailwindcss' src={tailwind} alt="react" />
            <h2>Tailwind Css</h2>
        </div>

        <div className="sing_skill">
            <img className='Tailwindcss' src={user} alt="react" />
            <h2>User Authentication</h2>
        </div>
       

        </div>

        <div className="two_side">

        <div className="sing_skill">
            <img className='react' src={html} alt="react" />
            <h2>HTML</h2>
        </div>

        <div className="sing_skill">
            <img className='redux' src={css} alt="react" />
            <h2>CSS</h2>
        </div>

        <div className="sing_skill">
            <img className='Tailwindcss' src={firebase} alt="react" />
            <h2>Firebase</h2>
        </div>

        <div className="sing_skill">
            <img className='Tailwindcss' src={data} alt="react" />
            <h2>Realtime Database</h2>
        </div>

        <div className="sing_skill">
            <img className='Tailwindcss' src={api} alt="react" />
            <h2>API Intregation</h2>
        </div>

        </div>

        

      </div>

      <div className="sing_skill m-auto w-fit items-center ">
            <img className='Bootstrap' src={Bootstrap} alt="react" />
            <h2>Bootstrap</h2>
        </div>

   </div>
   </section>
  )
}

export default Skills