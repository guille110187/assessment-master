import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import iPhone_front from '../images/iPhone_front.png';
import iPhone_back from '../images/iPhone_back.png';

class IPhone_Slider extends React.Component {
    render() {
        return (
            <div>
            <Carousel  interval={500} transitionTime={500} showIndicators={false} showArrows={false} showStatus={false}   >
                    <div>
                        <img src={iPhone_front} />
                    </div>
                    <div>
                        <img src={iPhone_back} />
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default IPhone_Slider;

