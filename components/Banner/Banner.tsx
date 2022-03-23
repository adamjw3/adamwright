import React from 'react';
import FancyLink from '../FancyLink';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';
import SplitText from '../SplitText';
import { InView } from 'react-intersection-observer';

const Banner: React.FC = () => {
    return (
        <div className="c-banner">
            <div className="c-banner__grid">
                <div className="c-banner__inner">
                    <header>
                        <div className="c-banner__header">
                            <Heading tag="h1" className="heading-xxlarge">
                                <SplitText words="Digital Freelancer from Birmingham" />
                            </Heading>
                        </div>
                        <div className="c-banner__intro">
                            <Paragraph tag="p" className="para-large">
                                <SplitText words="Working with companies to create beautiful, effective, and user-friendly websites." />
                            </Paragraph>
                        </div>
                        <InView triggerOnce={true}>
                            {({ inView, ref, entry }) => (
                                <div className={inView ? 'c-banner__btn-wrapper is-inview' : 'c-banner__btn-wrapper'} ref={ref}>
                                    <FancyLink destination="/contact" a11yText="text" extraClasses="c-banner__btn c-btn">
                                        Find out more
                                    </FancyLink>
                                </div>
                            )}
                        </InView>
                    </header>
                    <div className="c-banner__image-mobile">
                        <img src="/images/bgmobile.png" alt="" />
                    </div>
                    <div className="c-banner__links">
                        <ul>
                            <li>
                                <FancyLink destination="/contact" a11yText="text">
                                    <SplitText words="Design." />
                                </FancyLink>
                            </li>
                            <li>
                                <FancyLink destination="/contact" a11yText="text">
                                    <SplitText words="Ecommerce." />
                                </FancyLink>
                            </li>
                            <li>
                                <FancyLink destination="/contact" a11yText="text">
                                    <SplitText words="Marketing." />
                                </FancyLink>
                            </li>
                            <li>
                                <FancyLink destination="/contact" a11yText="text">
                                    <SplitText words="Support." />
                                </FancyLink>
                            </li>
                        </ul>
                    </div>
                    <div className="c-banner__scroller"></div>
                    <div className="c-banner__image-desktop">
                        <img src="/images/bgdesktop.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
