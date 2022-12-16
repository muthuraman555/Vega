import React from 'react'
import { Link } from 'react-router-dom';
import "./Style.css";
import Navbar from './Navbar';

const Banner = () => {
  return (
    <div className='banner' id="Home">
      <Navbar />
      <div className='container'>
        <div className='title'>
          <h2>CONSTRUCTION COMPANY.</h2>
          <i>"   Vega Construction Pty Ltd is established with the
                commitment to provide high-quality construction
                services in a timely manner at affordable prices."</i>
          <br />
          <br />
          <Link to="#">Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default Banner