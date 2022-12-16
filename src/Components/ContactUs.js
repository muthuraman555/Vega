import React from 'react';
import { Link } from "react-router-dom";
import { Phone } from "heroicons-react";
import { Mail } from "heroicons-react";
import { LocationMarker } from "heroicons-react";
import face from "./Asset/Image/facebook.png"
import insta from "./Asset/Image/instagram.png"
import { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormValitaion from './FormValitaion';

const ContactUs = () => {

    const [loginInput, setloginInput] = useState({
        first_name: "",
        last_name: "",
        email:"",
        message:"",
      });

      const handleInput = (e) => {
        e.persist();
        setloginInput({ ...loginInput, [e.target.name]: e.target.value })
      }

      const loginsubmit = (e) => {
        e.preventDefault();
    
        const data = {
            first_name: loginInput.first_name,
            last_name: loginInput.last_name,
            email:loginInput.email,
            message:loginInput.message
        }
    
          axios.post(`http://192.168.100.156:5005/api/form/submit`,data
          )
          .then(res => {
            alert("Message Succefully Send")
          });
      }

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
                                    <h5>51 Tuckfiled Way, Nollamara WA 6061</h5>
                                </div>
                                <div className='maps_icon'>
                                    <LocationMarker size={42}/>
                                </div>
                                </div>
                                </div>
                                <div className='col-md-12 col-lg-6 right_forms'>
                                    <div className='forms_content'>
                                        <h2>Lets's Talk</h2>
                                        <p>Full up the form our team will get back to you within 24 hours </p>
                                    </div>
                                    <div className='input_boxes'>
                                        {/* <form onSubmit={loginsubmit}>
                                        <div className='row'>
                                            <div className='col-md-6 mt-4'>
                                                <label>First Name</label>
                                              <br/>
                                              <br/>
                                                <input type="text" placeholder="Enter Your First Name" name='first_name' onChange={handleInput} className='form-control' />
                                            </div>
                                            <div className='col-md-6 mt-4'>
                                                <label>Last Name</label>
                                                <br />
                                                <br/>
                                                <input type="text" placeholder="Enter Your Last Name" name='last_name' onChange={handleInput} className='form-control' />
                                            </div>
                                            <div className='col-md-12 mt-4'>
                                                <label>Email Address</label>
                                                <br />
                                                <br/>
                                                <input type="email" placeholder="Enter Your Email Address" name='email' onChange={handleInput} className='form-control' />
                                            </div>
                                            <div className='col-md-12 mt-4'>
                                                <label>Message</label>
                                                <br />
                                                <br/>
                                                <textarea placeholder='Enter Your Message' name='message'  onChange={handleInput} rows="4" className="form-control" />
                                            </div>
                                            <div className='col-md-12 mt-4'>
                                                <button  type='submit'>Send Message</button>
                                            </div>
                                            </div>
                                        </form> */}
                                        <FormValitaion />
                                    </div>
                                </div>
                                <div className='col-md-12 social_media'>
                                    <div className='container'>
                                        <h2>Get in Touch</h2>
                                        <div className='row social_child'>
                                            <div className='col-md-6 col-lg-3'>
                                                <div className='row social_thired'>
                                                    <div className='col-4 col-md-2 social_icons_back'>
                                                        <Phone />
                                                    </div>
                                                    <div className='col-md-10 col-lg-7'>
                                                        <p>Phone Number</p>
                                                        <Link to="#">0469 805 209</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-lg-3'>
                                                <div className='row social_thired'>
                                                    <div className='col-4 col-md-2 social_icons_back'>
                                                        <Mail />
                                                    </div>
                                                    <div className='col-md-10 col-lg-7'>
                                                        <p>Email</p>
                                                        <Link to="#">AsAd@vega.com.au</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-lg-3'>
                                                <div className='row social_thired'>
                                                    <div className='col-4 col-md-2 social_icons_back'>
                                                        <LocationMarker />
                                                    </div>
                                                    <div className='col-md-10 col-lg-7'>
                                                        <p>Map Street</p>
                                                        <Link to="#">51 Map way abudhabi@132</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='offset-lg-4 col-md-6  col-lg-7'>
                                               <div className='row social '>
                                                <div className='col-2 col-md-3 col-lg-1'>
                                                <img src={face} alt="facebook" ></img>
                                                </div>
                                                <div className='col-2 col-md-3 col-lg-1'>
                                                <img src={insta} alt="insta" ></img>
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