import React from 'react'
import './Portfolio.css'
import Pbg from '../../assets/PortfolioBG.png'


const Portfolio = () => {
  return (
    <section id='Work' style={{background:`url(${Pbg})center/cover no-repeat`}} className='Mina_portfolio'>

        <div className="container">

        <div className="P_header">
            <h1>MY <span> PORTFOLIO</span></h1>
        </div>

        <div className="about_work">
           <h1>My <span>Work</span></h1>
           </div>
           <div className="Recent_work">
            <h2>RECENT PROJECTS</h2>
           </div>


        </div>

    </section>
  )
}

export default Portfolio