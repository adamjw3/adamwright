import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

const Locoscroll = ({ children }) => {
    const containerRef = useRef(null);
    return (
        <LocomotiveScrollProvider optiona={{ smooth: true, lerp: 0.5 }} containerRef={containerRef} watch={[]}>
            <div data-scroll-container ref={containerRef} id="scroll-container">
                <div data-scroll-section>{children}</div>
            </div>
        </LocomotiveScrollProvider>
    );
};

export default Locoscroll;
