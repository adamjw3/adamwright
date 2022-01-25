import React from 'react';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';

const Tech: React.FC = () => {
    return (
        <div className="c-tech">
            <div className="c-tech__inner">
                <h2 className="c-tech__header heading-large">Expertise that can help you design and build a website you’re proud of.</h2>
                <p className="c-tech__intro">
                    We are UK Shopify Experts from Manchester and we help independent brands like yours to level-up their Shopify and digital marketing expertise so you can focus on running your
                    business.
                </p>
                <div className="c-tech__items-container">
                    <Marquee velocity={5} direction="ltr" scatterRandomly={false} resetAfterTries={1} onInit={() => console.log('hi')} onFinish={() => console.log('hi')}>
                        {times(1, Number).map((id) => (
                            <div key={id} className="c-tech__items">
                                <div className="c-tech__item">
                                    <img src="/images/shopify.png" alt="shopify" />
                                </div>
                                <div className="c-tech__item">
                                    <img src="/images/google.png" alt="google" />
                                </div>
                                <div className="c-tech__item">
                                    <img src="/images/contentful.png" alt="contentful" />
                                </div>
                                <div className="c-tech__item">
                                    <img src="/images/react.png" alt="react" />
                                </div>
                                <div className="c-tech__item">
                                    <img src="/images/nextjs.png" alt="next js" />
                                </div>
                                <div className="c-tech__item">
                                    <img src="/images/mailchimp.png" alt="mailchimp" />
                                </div>
                                <div className="c-tech__item">
                                    <img src="/images/figma.png" alt="figma" />
                                </div>
                                <div className="c-tech__item">
                                    <img src="/images/wordpress.png" alt="wordpress" />
                                </div>
                                <div className="c-tech__item">
                                    <img src="/images/amazon.png" alt="aws" />
                                </div>
                                <div className="c-tech__item">
                                    <img src="/images/jquery.png" alt="jquery" />
                                </div>
                            </div>
                        ))}
                        ;
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Tech;
