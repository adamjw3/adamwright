import React from 'react';
import Image from 'next/image';
import FancyLink from '../FancyLink';
import Heading from '../common/Heading';
import SplitText from '../SplitText';
import { InView } from 'react-intersection-observer';

const HomeWork: React.FC = () => {
    return (
        <div className="c-home-work">
            <div className="c-home-work__inner">
                <div className="c-home-work__header" data-scroll>
                    <Heading tag="h2" className="heading-large">
                        <SplitText words="We&lsquo;ve helped brilliant brands and organisations be more effective online." />
                    </Heading>
                </div>
                <InView triggerOnce={true}>
                    {({ inView, ref, entry }) => (
                        <div className={inView ? 'c-home-work__item-1 is-inview' : 'c-home-work__item-1'} ref={ref}>
                            <FancyLink destination="/contact" a11yText="text" extraClasses="c-home-work__image">
                                <Image src="/images/homePickup.jpg" alt="Logo" layout="responsive" width="422" height="229" />
                            </FancyLink>
                        </div>
                    )}
                </InView>
                <InView triggerOnce={true}>
                    {({ inView, ref, entry }) => (
                        <div className={inView ? 'c-home-work__item-2 is-inview' : 'c-home-work__item-2'} ref={ref}>
                            <FancyLink destination="/contact" a11yText="text" extraClasses="c-home-work__image">
                                <Image src="/images/homedemamiel.jpg" alt="Logo" layout="responsive" width="528" height="304" />
                            </FancyLink>
                        </div>
                    )}
                </InView>
                <FancyLink destination="/contact" a11yText="text" extraClasses="c-home-work__link">
                    View Work.
                </FancyLink>
            </div>
        </div>
    );
};

export default HomeWork;
