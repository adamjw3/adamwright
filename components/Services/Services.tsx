import React from 'react';
import FancyLink from '../FancyLink';
import Image from 'next/image';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';

const Services = () => {
    return (
        <div className="c-services">
            <div className="c-services__inner">
                <div className="c-services__item">
                    <FancyLink destination="/services/webdesign" a11yText="Web design" extraClasses="c-services__link">
                        <div className="c-services__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-services__title">
                            <Heading tag="h2" className="heading">
                                Web design
                            </Heading>
                        </div>
                        <Paragraph className="para">A website is a brands most important marketing tool. It can deliver rich content, to a wide audience in a short period of time.</Paragraph>
                    </FancyLink>
                </div>
                <div className="c-services__item">
                    <FancyLink destination="/services/webdesign" a11yText="Ecommerce" extraClasses="c-services__link">
                        <div className="c-services__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-services__title">
                            <Heading tag="h2" className="heading">
                                Ecommeerce
                            </Heading>
                        </div>
                        <Paragraph className="para">A website is a brands most important marketing tool. It can deliver rich content, to a wide audience in a short period of time.</Paragraph>
                    </FancyLink>
                </div>
                <div className="c-services__item">
                    <FancyLink destination="/services/webdesign" a11yText="Marketing" extraClasses="c-services__link">
                        <div className="c-services__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-services__title">
                            <Heading tag="h2" className="heading">
                                Marketing
                            </Heading>
                        </div>
                        <Paragraph className="para">A website is a brands most important marketing tool. It can deliver rich content, to a wide audience in a short period of time.</Paragraph>
                    </FancyLink>
                </div>
                <div className="c-services__item">
                    <FancyLink destination="/services/webdesign" a11yText="SEO" extraClasses="c-services__link">
                        <div className="c-services__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-services__title">
                            <Heading tag="h2" className="heading">
                                SEO
                            </Heading>
                        </div>
                        <Paragraph className="para">A website is a brands most important marketing tool. It can deliver rich content, to a wide audience in a short period of time.</Paragraph>
                    </FancyLink>
                </div>
                <div className="c-services__item">
                    <FancyLink destination="/services/webdesign" a11yText="Copy Writing" extraClasses="c-services__link">
                        <div className="c-services__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-services__title">
                            <Heading tag="h2" className="heading">
                                Copywriting
                            </Heading>
                        </div>
                        <Paragraph className="para">A website is a brands most important marketing tool. It can deliver rich content, to a wide audience in a short period of time.</Paragraph>
                    </FancyLink>
                </div>
                <div className="c-services__item">
                    <FancyLink destination="/services/webdesign" a11yText="Support" extraClasses="c-services__link">
                        <div className="c-services__image">
                            <Image src="/images/webdesign.jpg" layout="responsive" objectFit="cover" width="414" height="222" alt="" />
                        </div>
                        <div className="c-services__title">
                            <Heading tag="h2" className="heading">
                                Support
                            </Heading>
                        </div>
                        <Paragraph className="para">A website is a brands most important marketing tool. It can deliver rich content, to a wide audience in a short period of time.</Paragraph>
                    </FancyLink>
                </div>
            </div>
        </div>
    );
};

export default Services;
