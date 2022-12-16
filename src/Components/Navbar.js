import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavStyle.css';
import { Link } from "react-scroll";
import logo from "./Asset/Image/vega_logo.png"

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                 <img src={logo} alt="logo"></img>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                        <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
                            <NavLink to="Home">Home</NavLink></Link>
                        </li>
                        <li>
                        <Link to="Cababilities" spy={true} smooth={true} offset={50} duration={500}>
                        <NavLink to="Cababilities">CABABILITIES</NavLink></Link>
                        </li>
                        <li>
                        <Link to="service" spy={true} smooth={true} offset={50} duration={500}>
                            <NavLink to="service">SERVICES</NavLink></Link>
                        </li>
                        <li>
                        <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>
                            <NavLink to="gallery">GALLERY</NavLink></Link>
                        </li>
                        <li>
                        <Link to="story" spy={true} smooth={true} offset={50} duration={500}>
                            <NavLink to="story">OUR STORY</NavLink></Link>
                        </li>
                        <li>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            <NavLink to="contact">CONTACT US</NavLink></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar