// import React, { useState, useEffect } from 'react';
import service from "./Asset/web.webp";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import first_img from "./Asset/service_image/1.jpg"
import second_img from "./Asset/service_image/2.jpg"
import thired_img from "./Asset/service_image/3.jpg"
import four_img from "./Asset/service_image/4.jpg"
import five_img from "./Asset/service_image/5.jpg"
import six_img from "./Asset/service_image/6.jpg"
import seven_img from "./Asset/service_image/7.jpg"
import eight_img from "./Asset/service_image/8.jpg"
import ServIceBootom from "./ServIceBootom";


// import Lottie from "lottie-react";
// import axios from "axios"
// import spinner from "./Asset/spinner.json"

const OurService = () => {


    // const [services, setservices] = useState([]);
    // const [loading, setloading] = useState(true)
    // useEffect(() => {
    //     const customer = async () => {
    //         const result = await axios.get(`http://192.168.100.156:5005/api/services`)
    //         setservices(result.data.services)
    //         setloading(false)
    //     }
    //     customer()
    // }, [])


    return (
        <>
            <div className='our_service' id="service">
                <div className='container'>
                    <h2>OUR SERVICES </h2>
                    <div className='row'>
                        {/* {
                        loading ? 
                        (
                            <Lottie animationData={spinner} loop={true} />
                        ) :
                        services.map(item => {
                            return (
                                <div className='col-md-12 service_lef'>
                                    <div className='row service_main gx-5'>
                                        <div className='col-md-6 left_img'>
                                            <div className='service_title'>
                                                <h5>{item.title}</h5>
                                                <p></p>
                                            </div>
                                            <img src={item.url} alt="service"></img>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='service_content'>
                                                <p>{item.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    } */}
                        <div className='col-md-12 col-lg-12'>
                            <div className='row service_main gx-5'>
                                <div className='col-md-6 left_img'>
                                    <div className='service_title'>
                                        <h5>Hi-End Residential Construction</h5>
                                        <p>(Apparments,Homes)</p>
                                        <p>(Coming soon)</p>
                                    </div>
                                    <img src={first_img} alt="service"></img>
                                </div>
                                <div className='col-md-6'>
                                    <div className='service_content'>
                                        <p>Vega Construction offers many benefits
                                            for those looking for a luxurious and
                                            comfortable home. The experienced
                                            team at Vega Construction cares about
                                            every detail from start to finish, ensuring
                                            that your home is built to the highest
                                            standards. With years of experience in
                                            the industry. Vega Construction has the
                                            knowledge and expertise to make your
                                            dream home a reality.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row service_second_main'>
                                <div className='col-md-6'>
                                    <div className='service_content'>
                                        <p>Residential renovation can be a great
                                            way to improve your home’s value and
                                            livability. By making updates to your
                                            home’s interior and exterior, you can
                                            add value to your property while also
                                            making it more comfortable and stylish. Whether you’re looking to update your
                                            kitchen or bathroom, or you want to
                                            completely renovate your home, Vega
                                            construction team is ready to help.
                                        </p>
                                        <ul>
                                            <p className="text-base pt-4">This also Includes</p>
                                            <li>athroom renovation</li>
                                            <li>Kitchen renovation</li>
                                            <li>Landry renovation</li>
                                            <li>Garages renovation</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-6 right_img'>
                                    <div className='service_title'>
                                        <h5>Residential Renovation</h5>
                                        <p></p>
                                    </div>
                                    <img src={service} alt="service"></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row service_main gx-5'>
                                <div className='col-md-6 left_img'>
                                    <div className='service_title'>
                                        <h5>Fencing Work</h5>
                                        <p></p>
                                    </div>
                                    <img src={second_img} alt="service"></img>
                                </div>
                                <div className='col-md-6'>
                                    <div className='service_content'>
                                        <p>Our team of experts can handle any
                                            fencing construction work you need to
                                            be done. We have the experience and
                                            expertise to get the job done right, and
                                            we'll work with you to make sure you're
                                            happy with the final product. Whether
                                            you need a new fence installed or an
                                            old one repaired, we can certainly help.
                                        </p>
                                        <ul>
                                            <p className="text-base pt-4">This also Includes</p>
                                            <li>Colorbond fencing</li>
                                            <li> Aluminum slat & picket fencing</li>
                                            <li>Chain link</li>
                                            <li> Garrison fencing</li>
                                            <li>Temporary fencing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row service_second_main'>
                                <div className='col-md-6'>
                                    <div className='service_content'>
                                        <p>Custom-made gates are a great way
                                            to add personality and style to your
                                            home. They can be made from a
                                            variety of materials, including wood, metal, and even glass. Gates can be
                                            simple and elegant, or they can be
                                            more ornate and detailed. No matter
                                            what your style, there is a custom gate
                                            that will suit your needs.
                                        </p>
                                        <ul>
                                            <p className="text-base pt-4">This also Includes</p>
                                            <li>Colorbond gates</li>
                                            <li> Aluminum slat & picket gates</li>
                                            <li> PVC gates</li>
                                            <li> Garrison gates</li>
                                            <p className="text-base pt-4"> Operation system:</p>
                                            <li>
                                                <ul>
                                                    <li>Manual</li>
                                                    <li>Electrical</li>
                                                    <li> Solar</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-6 right_img'>
                                    <div className='service_title'>
                                        <h5>Custom Made Gates</h5>
                                        <p></p>
                                    </div>
                                    <img src={thired_img} alt="service"></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row service_main gx-5'>
                                <div className='col-md-6 left_img'>
                                    <div className='service_title'>
                                        <h5>Landscaping</h5>
                                        <p></p>
                                    </div>
                                    <img src={four_img} alt="service"></img>
                                </div>
                                <div className='col-md-6'>
                                    <div className='service_content'>
                                        <p>We have a lot of experience with
                                            landscaping construction work. We
                                            know how to properly install plants,
                                            pavers, irrigation systems, and more. We have worked on projects of all sizes,
                                            so we are confident that we can handle
                                            any job you throw at us.
                                        </p>
                                        <ul>
                                            <p className="text-base pt-4">This also Includes</p>
                                            <li>Garden beds</li>
                                            <li>  Planter boxes</li>
                                            <li>Artificial Lawn</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row service_second_main'>
                                <div className='col-md-6'>
                                    <div className='service_content'>
                                        <p>A retaining wall is a structure that holds
                                            back soil or rock from a land area. It is
                                            used in construction to create level
                                            areas in hilly or mountainous terrain.
                                            Retaining walls can also be used to
                                            protect against erosion and to create
                                            decorative features. We have complete
                                            experience in retaining wall
                                            construction work.
                                        </p>
                                        <ul>
                                            <p className="text-base pt-4">This also includes</p>
                                            <li>Post and panel</li>
                                            <p className=" text-base pt-4 "> Operation system:</p>
                                            <li>
                                                <ul>
                                                    <li>Manual</li>
                                                    <li>Electrical</li>
                                                    <li> Solar</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-6 right_img'>
                                    <div className='service_title'>
                                        <h5>Retaining Walls</h5>
                                        <p></p>
                                    </div>
                                    <img src={five_img} alt="service"></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row service_main gx-5'>
                                <div className='col-md-6 left_img'>
                                    <div className='service_title'>
                                        <h5>Earth Moving</h5>
                                        <p></p>
                                    </div>
                                    <img src={six_img} alt="service"></img>
                                </div>
                                <div className='col-md-6'>
                                    <div className='service_content'>
                                        <p>Our team can handle all of your earth- moving needs. Whether you need a
                                            small amount of dirt moved or an entire
                                            hillside shifted, we have the equipment
                                            and experience to get the job done
                                            right. We take pride in our work and will
                                            always make sure that your project is
                                            completed to your satisfaction.
                                        </p>
                                        <ul className="mr-4">
                                            <p className="text-base pt-4">This also Includes</p>
                                            <li> Site preparation</li>
                                            <li> Excavation</li>
                                            <li>  Leveling</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row service_second_main'>
                                <div className='col-md-6'>
                                    <div className='service_content'>
                                        <p>Tiling and paving work can be very
                                            tedious. It is important to make sure
                                            that the area is level and that the tiles
                                            are set correctly. If not, the finished
                                            product will not look good and it will be
                                            a waste of time and money. We have
                                            complete experience in tiling and
                                            paving work.
                                        </p>
                                        <ul>
                                            <p className="text-base  pt-4">This also includes</p>
                                            <li>Post and panel</li>
                                            <li>Tiling</li>
                                            <li> Brick & concrete paving</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-6 right_img'>
                                    <div className='service_title'>
                                        <h5>Tiling & paving</h5>
                                        <p></p>
                                    </div>
                                    <img src={seven_img} alt="service"></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row service_main gx-5'>
                                <div className='col-md-6 left_img'>
                                    <div className='service_title'>
                                        <h5>Services</h5>
                                        <p></p>
                                    </div>
                                    <img src={eight_img} alt="service"></img>
                                </div>
                                <div className='col-md-6'>
                                    <div className='service_content'>
                                        <p>If you're in need of any underground
                                            work to be completed, we at Vega
                                            Construction are more than happy to
                                            help. We do digging and installation of
                                            drainage and other underground utility
                                            piping. We also fix cracks, potholes, and
                                            other damage to concrete or asphalt
                                            surfaces.
                                        </p>
                                        <ul>
                                            <p className="text-base pt-4">This also Includes</p>
                                            <li> Trenching</li>
                                            <li> Service laying</li>
                                            <li> Backfilling</li>
                                            <li>Concrete and asphalt repairing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServIceBootom />
        </>
      
    )
}

export default OurService