import React from 'react';
import { useLottie } from "lottie-react";
import loader from "./Asset/loader.json"

const Loader = () => {

    const options = {
        animationData: loader,
        loop: true
    };

    const { View } = useLottie(options);
    return (
        <div className='loader'>
            <>
                {
                    View
                }
            </>
        </div>
    )
}

export default Loader