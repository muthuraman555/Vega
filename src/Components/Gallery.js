import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";
import Lottie from "lottie-react";
import spinner from "./Asset/spinner.json"
import { useState, useEffect } from 'react';


const Gallery = () => {

  const [gallery, setgallery] = useState([]);
  const [loading, setloading] = useState(true);
  
  useEffect(() => {
      const customer = async () => {
        const result = await axios.get(`http://192.168.100.156:5005/api/gallery`)
        setgallery(result.data.gallery)
        setloading(false)
      }
      customer()
    }, [])

  return (
    <div className='gallery' id="gallery">
      <div className='container'>
        <h2>GALLERY</h2>
      </div>

      <div className='desktop_view'>
        <OwlCarousel items={1}
          className="owl-theme"
          loop
          dots={false}
          margin={10}
          autoPlay
          stagePadding={300}
        >
        {
          loading ? 
                        (
                            <Lottie animationData={spinner} loop={true} />
                        ) :
          gallery.map(item =>{
            return(
              <div><img className="img" src={item} alt="images" /></div>
            )
          })
        }
        </OwlCarousel>
      </div>

      <div className='mobile_view'>
      <OwlCarousel items={1}
          className="owl-theme"
          loop
          dots={false}
          margin={10}
          autoPlay
          stagePadding={30}
        >
           {
          loading ? 
                        (
                            <Lottie animationData={spinner} loop={true} />
                        ) :
          gallery.map(item =>{
            return(
              <div><img className="img" src={item} alt="images" /></div>
            )
          })
        }
        </OwlCarousel>
      </div>

      <div className='Tab_view'>
      <OwlCarousel items={1}
          className="owl-theme"
          loop
          dots={false}
          margin={10}
          autoPlay
          stagePadding={30}
        >
          {
          loading ? 
                        (
                            <Lottie animationData={spinner} loop={true} />
                        ) :
          gallery.map(item =>{
            return(
              <div><img className="img" src={item} alt="images" /></div>
            )
          })
        }
        </OwlCarousel>
      </div>

    </div>
  )
}

export default Gallery