import React from 'react'
import './Comment.css'
import revimg from '../../assets/RV3.png'
import Boxeffect from '../../assets/Box_C.png'


const Comments = () => {
  return (
    <section id='Review'style={{background:`url(${revimg})center/cover no-repeat`}} className='review_madina'>
      <div className="container">

        <div className="box_com">
          <img src={Boxeffect} alt="animation" />
        </div>

      </div>
    </section>
  )
}

export default Comments