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
          <i>"Create a react application First, we have to create a simple react application using the create-react-app application using the"</i>
          <br />
          <br />
          <Link to="#">Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default Banner