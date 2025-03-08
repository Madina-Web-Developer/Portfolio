import React from 'react'
import './Counter.css'
import Cbg from '../../assets/CounterBg.png'
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <section id='counter'style={{background:`url(${Cbg})center/cover no-repeat`}} className='mina_counter'>
        <div className="container">

           <div className="main_counter" 
         >

            <div className="singel_counter">
              <div className="Cnumber">
                <h1><CountUp end={30} duration={10}/> <span>+</span></h1>
              </div>
              <div className="Ctext">
                <h2>Completed Projects</h2>
              </div>
            </div>

            <div className="singel_counter">
              <div className="Cnumber">
                <h1><CountUp end={30} duration={10} /><span>+</span></h1>
              </div>
              <div className="Ctext">
                <h2>Completed Projects</h2>
              </div>
            </div>


            <div className="singel_counter">
              <div className="Cnumber">
                <h1><CountUp end={30} duration={10}/><span>+</span></h1>
              </div>
              <div className="Ctext">
                <h2>Completed Projects</h2>
              </div>
            </div>
            
           </div>

        </div>
    </section>
  )
}

export default Counter