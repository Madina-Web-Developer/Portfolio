import React from 'react'
import './Banner.css'
import bannerimg from '../../assets/Banner.png'
import { Link } from 'react-router'
import YouTubeLogo from '../../assets/YouTube.png'
import Madina from '../../assets/MADINA.png'
import Madina1 from '../../assets/MMM.png'
import Madina2 from '../../assets/Madina1.png'
import Madina3 from '../../assets/Madina4.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Banner = () => {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
 
  return (
    <section style={{background:`url(${bannerimg})center/cover no-repeat`}} className='Mina_Banner'>

        <div className="main_Banner relative">

            <div className="container">

            <div className="left_side">
               <div className="name_d">
                <h2>MADINA AKTER MINA</h2>
               </div>
                <div className="MINA w-fit flex">
               <h1>HAY! I’M MINA</h1>
               <div className="emoji animate-wiggle-more animate-infinite">👋</div>
                </div>
                <div className="Icon_text">
                    <h4>REACT WEB DEVELOPER.....</h4>
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

             <div className="slick-container z-[555] absolute w-[500px]">

            <Slider {...settings}>
                <div>
                <div className='right_side overflow-hidden absolute top-0 right-0'>
                <img className='' src={Madina} alt="picture"/>
                </div>
                </div>

                <div>
                <div className='right_side overflow-hidden absolute top-0 right-0'>
                <img className='' src={Madina} alt="picture"/>
                </div>
                </div>
                
                </Slider>
             </div>

        </div>
       
    </section>
  )
}

export default Banner