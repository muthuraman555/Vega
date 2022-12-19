import React from 'react';
import logo from "./Asset/Image/vega_logo.png";
import {Link} from  "react-router-dom"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row first_footer'>
                    <div className='col-md-8 col-lg-6'>
                        <div className='footer_title'>
                            <img src={logo} alt="logo"></img>
                            <p>
                                If you're looking for top-notch quality
                                assurance, you've come to the right
                                place. We take pride in our work and
                                stand behind everything we do. So if
                                you're ever unhappy with something,
                                just let us know and we'll make it right.
                                You can rest easy knowing that you're in
                                good hands with us
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row second_footer'>
                    <div className='col-md-6'>
                        <p>(C) 2022 All Rights Reserved. Mvp Digital</p>
                        <Link to="https://www.mvpdigital.com.au/">www.MvpDigital.com.au</Link>
                    </div>
                </div>
                <div className='row thred_footer'>
                    <div className='col-md-6'>
                        <h2 className='mb-3 text-white'>Bonus Number.</h2>
                        <div className='last_footer'>
                            <div className='first_box_foot'>
                                <h2>54</h2>
                                <p>Project Done</p>
                            </div>
                            <div className='secont_box_foot'>
                                <h2>54</h2>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer