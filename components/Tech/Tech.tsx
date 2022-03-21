import React from 'react';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';
import TickerSlider from '../TickerSlider';

const Tech: React.FC = () => {
    return (
        <div className="c-tech">
            <div className="c-tech__inner">
                <div className="c-tech__header">
                    <Heading tag="h2" className="heading-large">
                        We use the latest technologies available to create timeless designs.
                    </Heading>
                </div>
                <div className="c-tech__items-container">
                    <TickerSlider tickerSpeed={1} rightToLeft={true}>
                        <span className="c-tech__item">
                            <img src="/images/shopify.png" alt="shopify" />
                        </span>
                        <span className="c-tech__item">
                            <img src="/images/google.png" alt="google" />
                        </span>
                        <span className="c-tech__item">
                            <img src="/images/contentful.png" alt="contentful" />
                        </span>
                        <span className="c-tech__item">
                            <img src="/images/react.png" alt="react" />
                        </span>
                        <span className="c-tech__item">
                            <img src="/images/nextjs.png" alt="next js" />
                        </span>
                        <span className="c-tech__item">
                            <img src="/images/mailchimp.png" alt="mailchimp" />
                        </span>
                        <span className="c-tech__item">
                            <img src="/images/figma.png" alt="figma" />
                        </span>
                        <span className="c-tech__item">
                            <img src="/images/wordpress.png" alt="wordpress" />
                        </span>
                        <span className="c-tech__item">
                            <img src="/images/amazon.png" alt="aws" />
                        </span>
                        <span className="c-tech__item">
                            <img src="/images/jquery.png" alt="jquery" />
                        </span>
                    </TickerSlider>
                </div>
            </div>
        </div>
    );
};

export default Tech;
