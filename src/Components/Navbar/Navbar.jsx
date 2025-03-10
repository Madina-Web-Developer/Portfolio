import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'
import logo from '../../assets/LOGO.png'
import { FaArrowRightLong } from 'react-icons/fa6'

const Navbar = () => {

  return (

    <>
    <nav>

        <div className="Mina_nav z-[999] ">
            <div className="container">

                <div className="main_nav">
                     <div className="Logo">
                        <img src={logo} alt="logo"/>
                     </div>

                     <div className="text">
                        <ul>
                            <li><Link to={'#'} >HOME</Link></li>
                            <li><Link to={'#'} >ABOUT</Link></li>
                            <li><Link to={'#'} >WORK</Link></li>
                            <li><Link to={'#'} >RESUME</Link></li>
                            <li><Link to={'#'} >SKILLS</Link></li>
                            <li><Link to={'#'} >CONTACT</Link></li>
                            <div className="talk">
                            <div className="letstalk flex gap-[6px] items-center">
                            <button><Link to={'#'}><h2>LETS TALK</h2></Link></button>
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