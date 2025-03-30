import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import logo from '../../assets/LOGO.png'
import { FaArrowRightLong } from 'react-icons/fa6'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          setScrolled(window.scrollY > 100);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <>
    <nav>

        <div className={`Mina_nav ${scrolled ? "scrolled" : ""}`}>
            <div className="container">

                <div className="main_nav">
                     <div className="Logo">
                        <img src={logo} alt="logo"/>
                     </div>

                     <div className="text">
                        <ul>
                            <li><Link to="Home" smooth={true} duration={1000} >HOME</Link></li>
                            <li><Link to="About"    smooth={true} duration={1000} >ABOUT</Link></li>
                            <li><Link to="Resume" smooth={true} duration={1000} >RESUME</Link></li>
                            <li><Link to="Skills" smooth={true} duration={1000}>SKILLS</Link></li>
                            <li><Link to="Work" smooth={true} duration={1000} >WORK</Link></li> 
                            <li><Link to="Work" smooth={true} duration={1000} >REVIEW</Link></li> 
                            <li><Link to="Contact" smooth={true} duration={1000}>CONTACT</Link></li>
                            <div className="talk">
                            <div className="letstalk flex gap-[6px] items-center">
                            <button><Link to="Contact" smooth={true} duration={700}><h2>LETS TALK</h2></Link></button>
                            <FaArrowRightLong className='Arrow'/>
                            </div>
                            </div>
                        </ul>
                     </div>
                </div>
            </div>
        </div>

    </nav>
    </>
  )
}

export default Navbar