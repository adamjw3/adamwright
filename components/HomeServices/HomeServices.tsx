import React from 'react';
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
                            I live to build websites which look good, perform seamlessly and deliver clear commercial benefits.
                        </Paragraph>
                    </div>
                    <div className="c-home-services__item">
                        <div className="c-home-services__heading-webdesign">
                            <Heading tag="h3" className="heading">
                                Marketing
                            </Heading>
                        </div>
                        <Paragraph tag="p" className="para-small">
                            Be it Email marketing or Pay-Per-Click advertising, I will do whats best to drive traffic to your website.
                        </Paragraph>
                    </div>
                    <div className="c-home-services__item">
                        <div className="c-home-services__heading-webdesign">
                            <Heading tag="h3" className="heading">
                                Ecommerce
                            </Heading>
                        </div>
                        <Paragraph tag="p" className="para-small">
                            Want to Sell products online? I can get you up and running in days using Shopify or Swell.
                        </Paragraph>
                    </div>
                    <div className="c-home-services__item">
                        <div className="c-home-services__heading-webdesign">
                            <Heading tag="h3" className="heading">
                                Support
                            </Heading>
                        </div>
                        <Paragraph tag="p" className="para-small">
                            A support plan will help keep your online presence performing well.
                        </Paragraph>
                    </div>
                    <div className="c-home-services__item">
                        <div className="c-home-services__heading-webdesign">
                            <Heading tag="h3" className="heading">
                                SEO
                            </Heading>
                        </div>
                        <Paragraph tag="p" className="para-small">
                            I can help increazse the visibilty of your webite in seach engines like Google. No gimmics just pure organic growth.
                        </Paragraph>
                    </div>
                    <div className="c-home-services__item">
                        <div className="c-home-services__heading-webdesign">
                            <Heading tag="h3" className="heading">
                                Copy Writing
                            </Heading>
                        </div>
                        <Paragraph tag="p" className="para-small">
                            Not sure how to engage with your customers? Let me build a voice for your brand.
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
