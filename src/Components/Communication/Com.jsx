import React from 'react'
import './Com.css'
import Contactimg from '../../assets/Com.png'
import MinaimgC from '../../assets/Contactimg.png'
import Eidimg from '../../assets/EidPic.png'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { Link } from 'react-router'
import { AiOutlineGlobal } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'


const Com = () => {
  return (
    <section id='Contact' style={{background:`url(${Contactimg})center/cover no-repeat`}} className='Mina_contact'>
      <div className="container">

        <div className="contact_header">
        <h1>GET IN <span> TOUCH</span></h1>
        </div>


        <div className="contact_box">

          <div className="mina_img">
            <img src={Eidimg} alt="contactimg" />
            <div className="left">

              <div className="all_icons_c">
                <h2>WRITE AN E-MAIL</h2>
                <h3>developermadina761@gmail.com</h3>
              </div>

                  <div className="contact_icons">
                  <a href='https://www.facebook.com/camelia.bin.josie/' target='_blank'  ><CiFacebook  className='c_icon' /></a>
                  <a href='https://www.linkedin.com/in/madina-akter-mina-326374346/' target='_blank' ><CiLinkedin  className='c_icon' /></a>
                  <a href={'#'}><AiOutlineGlobal className='c_icon'/></a>
                  <a href='https://github.com/Madina-Web-Developer' target='_blank'><VscGithub className='c_icon'/></a>
                  </div>

            </div>
          </div>

        
          <div className="right_commu">
          
         <h5>Let’s Discuss Your Project !</h5>
         <p>Always available for freelancing if the right project comes along, open to discussing new projects, creative ideas or opportunities to be part of your vision in real, so feel free to get in touch with me.</p>

          <div className="box_2">

            <div className="all_f_part">

            <div className="Com_name_part">
           <h6>FIRST NAME</h6>
              <input className='same' type="text" placeholder='Name *' />
            </div>

            <div className="email_part">
             <h6>YOUR EMAIL</h6>
              <input className='same' type="mail" placeholder='Email *' />
            </div>


            </div>

            <div className="subject">
            <h6>SUBJECT</h6>
            <input className='subject_input' type="text" placeholder='Subject *' />
            </div>

            <div className="message">
              <h6>YOUR MESSAGE</h6>
              <textarea className='Message_textarea' name="Message" id="message" placeholder='Your Message *'></textarea>
            </div>

            <div className="box_button">
              <button className='box2_b' type='submit'>Send Message</button>
            </div>

          </div>

          </div>
          
         

        </div>


      </div>
    </section>
  )
}

export default Com