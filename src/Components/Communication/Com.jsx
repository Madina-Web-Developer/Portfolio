import React from 'react'
import './Com.css'
import Contactimg from '../../assets/Com.png'
import MinaimgC from '../../assets/Contactimg.png'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { Link } from 'react-router'
import { AiOutlineGlobal } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'


const Com = () => {
  return (
    <section style={{background:`url(${Contactimg})center/cover no-repeat`}} className='Mina_contact'>
      <div className="container">

        <div className="contact_header">
        <h1>GET IN <span> TOUCH</span></h1>
        </div>


        <div className="contact_box">

          <div className="mina_img">
            <img src={MinaimgC} alt="contactimg" />
            <div className="left">

              <div className="all_icons_c">
                <h2>WRITE AN E-MAIL</h2>
                <h3>developermadina761@gmail.com</h3>
              </div>

                  <div className="contact_icons">
                  <Link to={'https://www.facebook.com/camelia.bin.josie/'} ><CiFacebook  className='c_icon' /></Link>
                  <Link to={'https://www.linkedin.com/in/madina-akter-mina-326374346/'} ><CiLinkedin  className='c_icon' /></Link>
                  <Link to={'#'}><AiOutlineGlobal className='c_icon'/></Link>
                  <Link to={'https://github.com/Madina-Web-Developer'}><VscGithub className='c_icon'/></Link>
                  </div>


            </div>
          </div>

        
          <div className="right_commu">
          
         <h5>Let’s Discuss Your Project</h5>
         <p>Always available for freelancing if the right project comes along, open to discussing new projects, creative ideas or opportunities to be part of your vision in real, so feel free to get in touch with me.</p>

          <div className="box_2">

          </div>

          </div>
          
         

        </div>


      </div>
    </section>
  )
}

export default Com