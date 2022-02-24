import React from 'react';
import Image from 'next/image';
import FancyLink from '../FancyLink';
import Heading from '../common/Heading';

const HomeWork: React.FC = () => {
    return (
        <div className="c-home-work">
            <div className="c-home-work__inner">
                <div className="c-home-work__header">
                    <Heading tag="h2" className="heading-large">
                        Weve helped brilliant brands and organisations be more effective online.
                    </Heading>
                </div>
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
