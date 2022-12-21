import Banner from "./Components/Banner";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import OurStory from "./Components/OurStory";
import OurService from "./Components/Our_service";
import Project from "./Components/Project";
import SecondBanner from "./Components/SecondBanner";
import axios from "axios";
import Navbar from "./Components/Navbar";
import AOS from "aos";
import { useEffect} from "react";
// import Loader from "./Components/Loader";

function App() {

  // const [refresh, setrefresh] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // useEffect(()=>{
  //   window.location.reload(false)
  //   const timer = setInterval(() => {
  //     setrefresh(!refresh)
  //     return () => clearInterval(timer)
  //   }, 1000);
  // }, [])


  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';
  axios.defaults.headers.post['Authorization'] = `4e0eec1c-7c52-11ed-a1eb-0242ac120002`;

  return (
    <div className="App">

            <Navbar />
            <Banner />
            <SecondBanner />
            <Project />
            <OurService />
            <Gallery />
            <OurStory />
            <ContactUs />
            <Footer />
    </div>
  );
}

export default App;
