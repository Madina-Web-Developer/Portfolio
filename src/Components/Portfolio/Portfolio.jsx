import React from 'react'
import './Portfolio.css'
import Pbg from '../../assets/PortfolioBG.png'
import PCricle from '../../assets/new.png'

const Portfolio = () => {
  return (
    <section style={{background:`url(${Pbg})center/cover no-repeat`}} className='Mina_portfolio'>

        <div className="container">

        <div className="P_header">

            <h1>MY <span> PORTFOLIO</span></h1>
          
            <div className="Port_C"data-aos="zoom-in"
          data-aos-duration="1500">
                <img src={PCricle} alt="PCircle" />
            </div>
        </div>
        </div>

    </section>
  )
}

export default Portfolio