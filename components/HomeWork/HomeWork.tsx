import React from 'react';
import Image from 'next/image';
import FancyLink from '../FancyLink';

const HomeWork: React.FC = () => {
    return (
        <div className="c-home-work">
            <div className="c-home-work__inner">
                <h2 className="c-home-work__header heading-large">Weve helped brilliant brands and organisations be more effective online.</h2>
                <div className="c-home-work__item-1">
                    <FancyLink destination="/contact" a11yText="text" extraClasses="c-home-work__image">
                        <Image src="/images/homePickup.jpg" alt="Logo" layout="responsive" width="422" height="229" />
                    </FancyLink>
                </div>
                <div className="c-home-work__item-2">
                    <FancyLink destination="/contact" a11yText="text" extraClasses="c-home-work__image">
                        <Image src="/images/homedemamiel.jpg" alt="Logo" layout="responsive" width="528" height="304" />
                    </FancyLink>
                </div>
                <FancyLink destination="/contact" a11yText="text" extraClasses="c-home-work__link">
                    View Work.
                </FancyLink>
            </div>
        </div>
    );
};

export default HomeWork;
