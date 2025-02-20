import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'
import logo from '../../assets/LOGO.png'

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
                            <li><Link to={'#'} >Home</Link></li>
                            <li><Link to={'#'} >About</Link></li>
                            <li><Link to={'#'} >Work</Link></li>
                            <li><Link to={'#'} >Resume</Link></li>
                            <li><Link to={'#'} >Skills</Link></li>
                            <li><Link to={'#'} >Contact</Link></li>
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