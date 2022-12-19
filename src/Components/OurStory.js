import React from 'react';
import twele from "./Asset/service_image/12.png"

const OurStory = () => {
    return (
        <div className='our-story' id="story">
            <div className='container'>
                <div className='row story'>
                    <div className='col-md-12 col-lg-6'>
                        <div className='story_content'>
                            <h2>OUR STORY</h2>
                            <p>
                                Asad, the founder of Vega Construction,
                                is a civil engineer with many years of
                                experience in the construction industry.
                                He started the company with the goal
                                of providing quality construction
                                services to his community. He has been
                                involved in many large projects and has
                                gained a vast amount of knowledge in
                                the field. Asad is very passionate about
                                his work and takes great pride in
                                ensuring that each project is completed
                                to the highest standard.
                            </p>
                        </div>
                    </div>
                    <div className='col-md-12 col-lg-5'>
                        <img src={twele} alt="service"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory