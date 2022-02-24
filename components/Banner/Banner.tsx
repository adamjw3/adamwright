import React from 'react';
import FancyLink from '../FancyLink';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';

const Banner: React.FC = () => {
    return (
        <div className="c-banner">
            <div className="c-banner__inner">
                <div className="c-banner__image-mobile">
                    <img src="/images/me.svg" alt="" />
                </div>
                <header>
                    <div className="c-banner__header">
                        <Heading tag="h1" className="heading-xxlarge">
                            Web Design, Marketing, Ecommerce Agency
                        </Heading>
                    </div>
                    <div className="c-banner__intro">
                        <Paragraph tag="p" className="para-large">
                            We are UK Shopify Experts from Manchester and we help independent brands like yours to level-up their Shopify and digital marketing expertise so you can focus on running
                            your business.
                        </Paragraph>
                    </div>
                </header>
                <FancyLink destination="/contact" a11yText="text" extraClasses="c-banner__btn c-btn">
                    Find out more
                </FancyLink>
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
                    <img src="/images/me.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
