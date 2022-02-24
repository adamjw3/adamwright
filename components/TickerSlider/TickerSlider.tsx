import React, { useRef, useEffect } from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

export interface TickerSliderProps {
    className?: string;
    tickerSpeed: number;
    rightToLeft: boolean;
}

const TickerSlider: React.FC<TickerSliderProps> = ({ className, tickerSpeed, rightToLeft, children }) => {
    const flkty = useRef(null);

    const updateSlider = () => {
        flkty.current.x = (flkty.current.x - tickerSpeed) % flkty.current.slideableWidth;
        flkty.current.selectedIndex = flkty.current.dragEndRestingSelect();
        flkty.current.updateSelectedSlide();
        flkty.current.settle(flkty.current.x);
        window.requestAnimationFrame(updateSlider);
    };

    useEffect(() => {
        updateSlider();
    }, []);

    const flickityOptions = {
        cellAlign: 'left',
        contain: true,
        autoPlay: false,
        prevNextButtons: false,
        pageDots: false,
        draggable: false,
        wrapAround: true,
        selectedAttraction: 0.015,
        friction: 0.25,
        rightToLeft: rightToLeft,
    };

    return (
        <Flickity
            options={flickityOptions}
            className="c-ticker-slider"
            flickityRef={(carouselRef) => {
                flkty.current = carouselRef;
            }}
        >
            {children}
        </Flickity>
    );
};

export default TickerSlider;
