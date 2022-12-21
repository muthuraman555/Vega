import React from 'react'
import { Link } from 'react-router-dom';
import banner from "./Asset/Image/banner_first.jpg"

import "./Style.css";


const Banner = () => {
  return (
    <div className='banner' id="Home">
      <img src={banner} alt="" className='w-100 h-100 banners' data-aos="zoom-out"
        data-aos-duration="500"></img>
      <div className='banner_content_child'>
        <div className='container'>
        <div className='title' data-aos="fade-right">
            <h2>CONSTRUCTION COMPANY.</h2>
            <i>"You can dream, create, design, an dbuild the most Wonderful place in the world.But it requires people to make the dream a reality." -Walt Disney</i>
            <br />
            <br />
            <Link to="gallery">Learn More</Link>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Banner