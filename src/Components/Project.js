import React from 'react';
import "./Style.css";
import Tick from './Asset/Image/check.png'
import Time from "./Asset/Image/hourglass.png"
import error from "./Asset/Image/cancel.png"

const Project = () => {
    return (
            <div className='project_stage'>
            <div className='container'>
                <h2>PROJECT STAGE</h2>
                <div className='row'>
                    <div className='project_small col-sm-6 col-md-6 col-lg-6 col-xl-3' data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine" >
                        <div className='row'>
                            <div className= 'col-3 col-md-3'>
                            <img src={Tick} alt="tick"></img>
                            </div>
                            <div className='col-8 col-md-7'>
                                <div className='project_box'>
                                    <h6>1.Stage</h6>
                                    <h4>Planning</h4>
                                    <span>Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project_small  col-sm-6 col-md-6 col-lg-6 col-xl-3 ' data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine">
                        <div className='row'>
                            <div className='col-3 col-md-3'>
                            <img src={Tick} alt="tick"></img>
                            </div>
                            <div className='col-8 col-md-7'>
                                <div className='project_box'>
                                    <h6>2.Stage</h6>
                                    <h4>Building</h4>
                                    <span>Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project_small  col-sm-6 col-md-6 col-lg-6 col-xl-3' data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine">
                        <div className='row project_process'>
                            <div className='col-3 col-md-3'>
                            <img src={Time} alt="tick"></img>
                            </div>
                            <div className='col-8 col-md-7'>
                                <div className='project_box'>
                                    <h6>3.Stage</h6>
                                    <h4>Finishing Works</h4>
                                    <span>In Progress</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project_small  col-sm-6 col-md-6 col-lg-6 col-xl-3' data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine">
                        <div className='row project_error'>
                            <div className='col-3 col-md-3'>
                            <img src={error} alt="tick"></img>
                            </div>
                            <div className='col-8 col-md-7'>
                                <div className='project_box'>
                                    <h6>4.Stage</h6>
                                    <h4>Projcet Done</h4>
                                    <span>Not Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project