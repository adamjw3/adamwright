import React from 'react';
import FancyLink from '../FancyLink';

const Banner: React.FC = () => {
    return (
        <div className="c-banner">
            <div className="c-banner__inner">
                <header>
                    <h1 className="c-banner__header heading-xlarge">Web Design, Marketing, Ecommerce and Support.</h1>
                    <p className="c-banner__intro">
                        We are UK Shopify Experts from Manchester and we help independent brands like yours to level-up their Shopify and digital marketing expertise so you can focus on running your
                        business.
                    </p>
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
            </div>
        </div>
    );
};

export default Banner;
