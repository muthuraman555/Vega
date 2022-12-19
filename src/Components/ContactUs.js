import React from 'react';
import { Link } from "react-router-dom";
import { Phone } from "heroicons-react";
import { Mail } from "heroicons-react";
import { LocationMarker } from "heroicons-react";
import face from "./Asset/Image/facebook.png"
import insta from "./Asset/Image/instagram.png"
import FormValitaion from './FormValitaion';


const ContactUs = () => {
    
    return (
        <>
            <div className='contact' id="contact">
                <div className='container'>
                    <h2>CONTACT US</h2>
                </div>
            </div>
            <div className='forms'>
                <div className='container'>
                    <div className='forms_back'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12 col-lg-6 left_forms'>
                                    <div className='maps_box'>
                                        <div className='maps'>
                                            <p>Map Street</p>
                                            <h5>51 Tuckfield Way, Nollamara WA 6061</h5>
                                        </div>
                                        <div className='maps_icon'>
                                            <LocationMarker size={42} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-6 right_forms'>
                                    <div className='forms_content'>
                                        <h2>Lets's Talk</h2>
                                        <p>Full up the form our team will get back to you within 24 hours </p>
                                    </div>
                                    <div className='input_boxes'>
                                        <FormValitaion />
                                    </div>
                                </div>
                                <div className='col-md-12 social_media'>
                                    <div className='container'>
                                        <h2>Get in Touch</h2>
                                        <div className='row social_child'>
                                            <div className='col-md-6 col-lg-3'>
                                                <div className='row social_thired'>
                                                    <div className='col-md-2 col-lg-1 social_icons_back'>
                                                        <Phone />
                                                    </div>
                                                    <div className='col-md-10 col-lg-10'>
                                                        <p>Phone Number</p>
                                                        <Link to="#">0469 805 209</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-lg-3'>
                                                <div className='row social_thired'>
                                                    <div className=' col-md-2 col-lg-1 social_icons_back'>
                                                        <Mail />
                                                    </div>
                                                    <div className='col-md-10 col-lg-10'>
                                                        <p>Email</p>
                                                        <Link to="#">Asad@vegaconstuction.com.au</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-lg-3'>
                                                <div className='row social_thired'>
                                                    <div className=' col-md-2 col-lg-1 social_icons_back'>
                                                        <LocationMarker />
                                                    </div>
                                                    <div className='col-md-10 col-lg-10'>
                                                        <p>Map Street</p>
                                                        <Link to="#">51 Tuckfield Way, Nollamara WA
                                                            6061</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='offset-lg-4 col-md-6  col-lg-7'>
                                                <div className='row social '>
                                                    <div className='col-2 col-md-3 col-lg-1'>
                                                        <Link to="https://www.facebook.com/Vegaconstructionptyltd"> <img src={face} alt="facebook" ></img></Link>
                                                    </div>
                                                    <div className='col-2 col-md-3 col-lg-1'>
                                                        <Link to="https://www.instagram.com/vegaconstruction1/?igshid=YmMyMTA2M2Y%3D"><img src={insta} alt="insta" ></img></Link>
                                                    </div>
                                                    <div className='col-12 col-md-3 sm:mt-3'>
                                                        <Link to="#">ABN 44853627562</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default ContactUs