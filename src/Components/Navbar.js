import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavStyle.css';
import logo from "./Asset/Image/vega_logo_mob.png"
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const [hamburger , sethamburger] = useState(false)

    
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
        sethamburger(!hamburger)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                 <img src={logo} alt="logo"></img>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                {
                        !hamburger ? 
                        (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                </svg>
                        ) 
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                            </svg>

                }
                    
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li >
                            <Link to="Home" onClick={handleShowNavbar} >
                            <NavLink to="Home">HOME</NavLink></Link>
                        </li>
                        <li>
                            <Link to="Cababilities"  onClick={handleShowNavbar} >
                        <NavLink to="Cababilities">CABABILITIES</NavLink></Link>
                        </li>
                        <li>
                            <Link to="service"  onClick={handleShowNavbar} >
                            <NavLink to="service">SERVICES</NavLink></Link>
                        </li>
                        <li>
                            <Link to="gallery"  onClick={handleShowNavbar} >
                            <NavLink to="gallery">GALLERY</NavLink></Link>
                        </li>
                        <li>
                            <Link to="story"   onClick={handleShowNavbar}>
                            <NavLink to="story">OUR STORY</NavLink></Link>
                        </li>
                        <li>
                            <Link to="contact" onClick={handleShowNavbar} >
                            <NavLink to="contact">CONTACT US</NavLink></Link>
                        </li>
                    </ul>
                </div>
                </div>
        </nav>
    )
}

export default Navbar