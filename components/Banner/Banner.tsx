import React from 'react';
import FancyLink from '../FancyLink';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';

const Banner: React.FC = () => {
    return (
        <div className="c-banner">
            <div className="c-banner__grid">
                <div className="c-banner__inner">
                    <header>
                        <div className="c-banner__header">
                            <Heading tag="h1" className="heading-xxlarge">
                                Digital Agency from Birmingham
                            </Heading>
                        </div>
                        <div className="c-banner__intro">
                            <Paragraph tag="p" className="para-large">
                                Working with companies to create beautiful, effective, and user-friendly websites.
                            </Paragraph>
                        </div>
                        <FancyLink destination="/contact" a11yText="text" extraClasses="c-banner__btn c-btn">
                            Find out more
                        </FancyLink>
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
