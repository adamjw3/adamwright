import React from 'react';
import Image from 'next/image';
import FancyLink from '../FancyLink';
import Heading from '../common/Heading';

const Insights: React.FC = () => {
    return (
        <div className="c-insights">
            <div className="c-insights__inner">
                <div className="c-insights__item">
                    <FancyLink destination="/insights/article" a11yText="Web design" extraClasses="c-insights__link">
                        <div className="c-insights__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-insights__title ">
                            <Heading tag="h2" className="heading">
                                Web design
                            </Heading>
                        </div>
                    </FancyLink>
                </div>
                <div className="c-insights__item">
                    <FancyLink destination="/insights/article" a11yText="Web design" extraClasses="c-insights__link">
                        <div className="c-insights__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-insights__title ">
                            <Heading tag="h2" className="heading">
                                Web design
                            </Heading>
                        </div>
                    </FancyLink>
                </div>
                <div className="c-insights__item">
                    <FancyLink destination="/insights/article" a11yText="Web design" extraClasses="c-insights__link">
                        <div className="c-insights__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-insights__title ">
                            <Heading tag="h2" className="heading">
                                Web design
                            </Heading>
                        </div>
                    </FancyLink>
                </div>
                <div className="c-insights__item">
                    <FancyLink destination="/insights/article" a11yText="Web design" extraClasses="c-insights__link">
                        <div className="c-insights__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-insights__title ">
                            <Heading tag="h2" className="heading">
                                Web design
                            </Heading>
                        </div>
                    </FancyLink>
                </div>
                <div className="c-insights__item">
                    <FancyLink destination="/insights/article" a11yText="Web design" extraClasses="c-insights__link">
                        <div className="c-insights__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-insights__title ">
                            <Heading tag="h2" className="heading">
                                Web design
                            </Heading>
                        </div>
                    </FancyLink>
                </div>
                <div className="c-insights__item">
                    <FancyLink destination="/insights/article" a11yText="Web design" extraClasses="c-insights__link">
                        <div className="c-insights__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-insights__title ">
                            <Heading tag="h2" className="heading">
                                Web design
                            </Heading>
                        </div>
                    </FancyLink>
                </div>
                <div className="c-insights__item">
                    <FancyLink destination="/insights/article" a11yText="Web design" extraClasses="c-insights__link">
                        <div className="c-insights__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-insights__title ">
                            <Heading tag="h2" className="heading">
                                Web design
                            </Heading>
                        </div>
                    </FancyLink>
                </div>
                <div className="c-insights__item">
                    <FancyLink destination="/insights/article" a11yText="Web design" extraClasses="c-insights__link">
                        <div className="c-insights__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-insights__title ">
                            <Heading tag="h2" className="heading">
                                Web design
                            </Heading>
                        </div>
                    </FancyLink>
                </div>
            </div>
        </div>
    );
};

export default Insights;
