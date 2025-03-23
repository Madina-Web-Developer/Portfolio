import React from 'react'
import './Com.css'
import Contactimg from '../../assets/Com.png'
import MinaimgC from '../../assets/Contactimg.png'

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
          </div>
          
          <div className="all_icons_c">
            <h2>WRITE AN E-MAIL</h2>
            <h3>developermadina761@gmail.com</h3>
          </div>

          <div className="github">
          <h2>GITHUB ACCOUNT</h2>
          <h3>https://github.com/Madina-Web-Developer</h3>
          </div>

          <div className="contact_icons">
            
          </div>
        

          <div className="left_cont">
            
          </div>

          <div className="right_contact">

          </div>
         

        </div>

      </div>
    </section>
  )
}

export default Com