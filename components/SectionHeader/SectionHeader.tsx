import React from 'react';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';

export interface SectionHeaderProps {
    title: string;
    scrollText: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, scrollText }) => {
    return (
        <div className="c-section-header">
            <div className="c-section-header__ticker">
                <Marquee velocity={20} direction={'rtl'} scatterRandomly={false} resetAfterTries={1} onInit={() => console.log('hi')} onFinish={() => console.log('hi')}>
                    {times(5, Number).map((id) => (
                        <span key={`child-${id}`}>{scrollText}&nbsp;</span>
                    ))}
                </Marquee>
            </div>
            <div className="c-section-header__inner">
                <div className="c-section-header__heading">
                    <h1 className="heading-large">{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;
