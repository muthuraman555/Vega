import React from 'react'
import nine from "./Asset/service_image/9.jpg"
import ten from "./Asset/service_image/10.jpg"
import eleven from "./Asset/service_image/11.jpg"
import OwlCarousel from 'react-owl-carousel';

const ServIceBootom = () => {
  return (
   <div className='service_bottoms'>
   <div className='container'>
          <div className='row service_bottom'>
              <div className=' col-md-3'>
                  <img src={nine} alt="service"></img>
              </div>
              <div className='col-md-3'>
                  <img src={ten} alt="service"></img>
              </div>
              <div className='col-md-3 service_right_img '>
                  <img src={eleven} alt="service"></img>
              </div>
          </div>
          <div className='mobile_service'>
              <OwlCarousel items={1}
                  className="owl-theme"
                  loop
                  dots={false}
                  margin={10}
                  autoPlay
                  stagePadding={20}
              >
                  <div ><img className="img" src={nine} alt="images" /></div>
                  <div ><img className="img" src={ten} alt="images" /></div>
                  <div ><img className="img" src={eleven} alt="images" /></div>
              </OwlCarousel>
          </div>
   </div>
      </div>
  )
}

export default ServIceBootom