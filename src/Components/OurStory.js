import React from 'react';
import twele from "./Asset/service_image/12.jpg"

const OurStory = () => {
    return (
        <div className='our-story' id="story">
            <div className='container'>
                <div className='row story'>
                    <div className='col-md-12 col-lg-6'>
                    <div className='story_content'>
                    <h2>OUR STORY</h2>
                        <p>
                            Each horizontal bar consists of various cards. The first bar includes three cards with the same titles and contents. Clicking the second bar will slide to present the next set of cards. The same goes for the third one. If you want, you can also add arrow icons or customize the design as a slideshow. Furthermore, the design is fully responsive. Simply resize the window, and then you can see four horizontal bars with cards separated properly.
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