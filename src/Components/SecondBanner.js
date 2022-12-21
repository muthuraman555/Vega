import React from 'react'
import { Link } from 'react-router-dom';
import "./Style.css";

const SecondBanner = () => {
  return (
    <div className='second_banner' id="Cababilities">
      <div className='container'>
        <div className='center_banner' >
          <div className='container'>
            <div className='title ' data-aos="fade-up">
              <h2>OUR CABABILITIES</h2>
              <i>
                Vega Construction Pty Ltd is established with the
                commitment to provide high-quality construction
                services in a timely manner at affordable prices. At Vega, we value our clients and work closely with
                them to get the project done within their expectations.
              </i>
              <br />
              <br />
              <Link to="#">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondBanner