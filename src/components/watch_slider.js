import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import White_Watch from '../images/White_Watch.png';
import Black_Watch from '../images/Black_Watch.png';

class Watch_Slider extends React.Component {
    render() {
        return (
            <div>
            <Carousel  interval={500} transitionTime={500} showThumbs={false} showIndicators={true} showArrows={false} showStatus={false}   >
                    <div>
                        <img src={White_Watch} />
                    </div>
                    <div>
                        <img src={Black_Watch} />
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default Watch_Slider;

