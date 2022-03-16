import React from 'react';
import FancyLink from '../FancyLink';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';
import SplitText from '../SplitText';

const Banner: React.FC = () => {
    return (
        <div className="c-banner">
            <div className="c-banner__grid">
                <div className="c-banner__inner">
                    <header>
                        <div className="c-banner__header" data-scroll>
                            <Heading tag="h1" className="heading-xxlarge">
                                <SplitText words="Digital Freelancer from Birmingham" />
                            </Heading>
                        </div>
                        <div className="c-banner__intro" data-scroll>
                            <Paragraph tag="p" className="para-large">
                                <SplitText words="Working with companies to create beautiful, effective, and user-friendly websites." />
                            </Paragraph>
                        </div>
                        <div className="c-banner__btn-wrapper" data-scroll>
                            <FancyLink destination="/contact" a11yText="text" extraClasses="c-banner__btn c-btn">
                                Find out more
                            </FancyLink>
                        </div>
                    </header>
                    <div className="c-banner__image-mobile">
                        <img src="/images/bgmobile.png" alt="" />
                    </div>
                    <div className="c-banner__links">
                        <ul>
                            <li>
                                <FancyLink destination="/contact" a11yText="text">
                                    Design.
                                </FancyLink>
                            </li>
                            <li>
                                <FancyLink destination="/contact" a11yText="text">
                                    Ecommerce.
                                </FancyLink>
                            </li>
                            <li>
                                <FancyLink destination="/contact" a11yText="text">
                                    Marketing.
                                </FancyLink>
                            </li>
                            <li>
                                <FancyLink destination="/contact" a11yText="text">
                                    Support.
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
