import React from 'react'
import './Comment.css'
import revimg from '../../assets/RV3.png'
import Boxeffect from '../../assets/Box_C.png'
import Farhatimg from '../../assets/Farhat.png'
import Riazimg from '../../assets/Riaz.png'


const Comments = () => {
  return (
    <section id='Review'style={{background:`url(${revimg})center/cover no-repeat`}} className='review_madina'>
      <div className="container">

        <div className="box_com">
          <img className='dot-animation' src={Boxeffect} alt="animation" />
        </div>

        <div className="Comment_text_part">
          <div className="com_head">
            <h1>TESTIMONIAL</h1>
          </div>
          <h2>People Trust Me</h2>
        </div>

        <div className="slider_com_part">

          <div className="people_img">
            <img src={Farhatimg} alt="farhatimg" />
          </div>
          <div className="people_comments">
            <p>"Working with Madina was an absolute pleasure! She took the time to understand my vision and turned it into a stunning, functional website. Her attention to detail, responsiveness, and creativity made the entire process smooth and enjoyable. Highly recommend !"</p>
            <h3>Farhat Ali</h3>
            <h4>Person Name</h4>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Comments