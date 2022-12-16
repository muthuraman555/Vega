import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row first_footer'>
                    <div className='col-md-8 col-lg-6'>
                        <div className='footer_title'>
                            <h2>VEGA</h2>
                            <p>Create a react application First, we have to create a simple react application using the create-react-app npm package.Install bootstrap package Here, we will use the bootstrap npm package to import bootstrap in react application</p>
                        </div>
                    </div>
                </div>
                <div className='row second_footer'>
                    <div className='col-md-6'>
                        <p>(C) 2022 All Rights Reserved. Mvp Digital</p>
                        <span>WWW.MvpDigital.com.au</span>
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