import React from 'react'
import { Link } from 'react-router-dom';

import "./Style.css";


const Banner = () => {
  return (
      <div className='banner' id="Home">
        <div className='container'>
          <div className='title'>
            <h2>CONSTRUCTION COMPANY.</h2>
            <i>"You can dream, create, design, an dbuild the most Wonderful place in the world.But it requires people to make the dream a reality." -Walt Disney</i>
            <br />
            <br />
            <Link to="gallery">Learn More</Link>
          </div>
        </div>
      </div>
    
  )
}

export default Banner