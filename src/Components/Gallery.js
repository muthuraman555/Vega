import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slider from "./Asset/web.webp";
import first_img from "./Asset/service_image/1.jpg"



const Gallery = () => {

  // const [gallery, setgallery] = useState([]);
  
  // useEffect(() => {
  //     const customer = async () => {
  //       const result = await axios.get(`http://192.168.100.156:5005/api/gallery`)
  //       setgallery(result.data.gallery)
  //     }
  //     customer()
  //   }, [])

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
        <>
        <div><img className="img" src={slider} alt="images" /></div>
        </>

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
       <div><img className="img" src={slider} alt="images" /></div>
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
         <div><img className="img" src={slider} alt="images" /></div>

        </OwlCarousel>
      </div>

    </div>
  )
}

export default Gallery