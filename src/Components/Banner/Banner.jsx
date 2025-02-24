import React from 'react'
import './Banner.css'
import bannerimg from '../../assets/Banner.png'
import { Link } from 'react-router'
import YouTubeLogo from '../../assets/YouTube.png'
import Madina1 from '../../assets/Madina1.webp'
import Madina2 from '../../assets/Madina2.webp'
import Madina3 from '../../assets/Madina3.webp'
import Madina4 from '../../assets/Madina4.webp'
import Typewriter from 'typewriter-effect';
import AnimatedCoursor from '../CouserEffect/AnimatedCoursor'





const Banner = () => {


  return (
    <section style={{background:`url(${bannerimg})center/cover no-repeat`}} className='Mina_Banner relative'>
      <AnimatedCoursor/>
        <div className="main_Banner">
        
            <div className="container">

            <div className="left_side">
               <div className="name_d animate-fade-down">
                <h2>MADINA AKTER MINA</h2>
               </div>
                
               <div data-aos="fade-right"
               data-aos-easing="linear"
               data-aos-duration="600">

                <div className="MINA w-fit flex">
               <h1>HAY! I’M MINA</h1>
               <div className="emoji animate-wiggle-more animate-infinite">👋</div>
                </div>

                <div className="Icon_text">
                    
              {/* ------------- Type Writer Effect  */}
                    <h4>
                        <Typewriter
                        
                        options={{
                            autoStart: true,
                            strings: ["I'M A REACT WEB DESIGNER. . . . . .", "I'M A REACT WEB DEVELOPER. . . . . ."],
                            loop: true,
                            delay:120,
                        }}
                        
                        />
                    </h4>
                </div>
                <p>
                I'm a Bangladesh-based web designer and front-end developer specializing in React.js. I focus on crafting clean, responsive, and user-friendly experiences that leave a lasting impression. I’m passionate about building exceptional websites that not only look great but also enhance usability and functionality. My goal is to create digital solutions that improve the lives of those around me, including my clients, by delivering innovative and impactful user experiences.
                </p>

                <div className="button">
                    <button><Link to={'#'}>Watch Video Resume</Link>
                    </button>
                    <img src={YouTubeLogo} alt="youtube" /> 
                </div>
            </div>
            </div>

               </div>
  
                <div className='right_side overflow-hidden absolute top-0 right-0'>
                <img className='' src={Madina2} alt="picture"/>
                </div>
               
                 
            

        </div>
       
    </section>
  )
}

export default Banner