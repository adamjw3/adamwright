import React, { useState, useEffect } from 'react';
import useDesktop from '../../hooks/useDesktop';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';
import FancyLink from '../FancyLink';

const HomeServices: React.FC = () => {
    return (
        <div className="c-home-services">
            <div className="c-home-services__inner">
                <div className="c-home-services__header">
                    <Heading tag="h2" className="heading-large">
                        Expertise that can help you design and build a website you’re proud of.
                    </Heading>
                </div>
                <div className="c-home-services__items">
                    <div className="c-home-services__item">
                        <div className="c-home-services__heading-webdesign">
                            <Heading tag="h3" className="heading">
                                Web design
                            </Heading>
                        </div>
                        <Paragraph tag="p" className="para-small">
                            Bespoke web design perfect for your brand and target audience.
                        </Paragraph>
                    </div>
                    <div className="c-home-services__item">
                        <div className="c-home-services__heading-webdesign">
                            <Heading tag="h3" className="heading">
                                Marketing
                            </Heading>
                        </div>
                        <Paragraph tag="p" className="para-small">
                            Bespoke web design perfect for your brand and target audience.
                        </Paragraph>
                    </div>
                    <div className="c-home-services__item">
                        <div className="c-home-services__heading-webdesign">
                            <Heading tag="h3" className="heading">
                                Ecommerce
                            </Heading>
                        </div>
                        <Paragraph tag="p" className="para-small">
                            Bespoke web design perfect for your brand and target audience.
                        </Paragraph>
                    </div>
                    <div className="c-home-services__item">
                        <div className="c-home-services__heading-webdesign">
                            <Heading tag="h3" className="heading">
                                Support
                            </Heading>
                        </div>
                        <Paragraph tag="p" className="para-small">
                            Bespoke web design perfect for your brand and target audience.
                        </Paragraph>
                    </div>
                    <div className="c-home-services__item">
                        <div className="c-home-services__heading-webdesign">
                            <Heading tag="h3" className="heading">
                                SEO
                            </Heading>
                        </div>
                        <Paragraph tag="p" className="para-small">
                            Bespoke web design perfect for your brand and target audience.
                        </Paragraph>
                    </div>
                    <div className="c-home-services__item">
                        <div className="c-home-services__heading-webdesign">
                            <Heading tag="h3" className="heading">
                                Copy Writing
                            </Heading>
                        </div>
                        <Paragraph tag="p" className="para-small">
                            Bespoke web design perfect for your brand and target audience.
                        </Paragraph>
                    </div>
                </div>
                <FancyLink destination="/contact" a11yText="text" extraClasses="c-home-services__link">
                    View Services.
                </FancyLink>
            </div>
        </div>
    );
};

export default HomeServices;
