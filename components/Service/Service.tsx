import React from 'react';
import Image from 'next/image';
import FancyLink from '../FancyLink';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';

const Service: React.FC = () => {
    return (
        <div className="c-service">
            <div className="c-service__inner">
                <div className="c-service__intro">
                    <div className="c-service__intro-column">
                        <Paragraph className="para-large">
                            <strong>A Web Design Studio in Birmingham who offers honest advice, industry experience and a great portfolio of work.</strong>
                        </Paragraph>
                    </div>
                    <div className="c-service__intro-column">
                        <Paragraph className="para">
                            UI/UX, Wireframes, Research and Development - we understand all areas of Web Design. We can take a start-up business with nothing to a fully functioning brand online and
                            offline. We can revamp an existing website, or take a successful brand to the next level. Our talented and creative web design team will work alongside you in collaboration
                            to create a site that reflects your brand, talks to your audience with meaning and personality, and has great functionality across latest devices.
                        </Paragraph>
                    </div>
                    <div className="c-service__intro-column">
                        <FancyLink destination="/" extraClasses="c-btn" a11yText="Start a project">
                            Start a Project
                        </FancyLink>
                    </div>
                </div>
            </div>
            <div className="c-service__content">
                <div className="c-service__content-inner">
                    <div className="c-service__content-column">
                        <div className="c-service__content-image">
                            <Image src="/images/webdesign-large.jpg" layout="responsive" objectFit="cover" width="545" height="726" alt="" />
                        </div>
                    </div>
                    <div className="c-service__content-column c-service__content-column-2">
                        <Heading className="heading-large" tag="h2">
                            Heading
                        </Heading>
                        <Paragraph className="para">
                            UI/UX, Wireframes, Research and Development - we understand all areas of Web Design. We can take a start-up business with nothing to a fully functioning brand online and
                            offline. We can revamp an existing website, or take a successful brand to the next level. Our talented and creative web design team will work alongside you in collaboration
                            to create a site that reflects your brand, talks to your audience with meaning and personality, and has great functionality across latest devices.
                        </Paragraph>
                        <Paragraph className="para">
                            UI/UX, Wireframes, Research and Development - we understand all areas of Web Design. We can take a start-up business with nothing to a fully functioning brand online and
                            offline. We can revamp an existing website, or take a successful brand to the next level. Our talented and creative web design team will work alongside you in collaboration
                            to create a site that reflects your brand, talks to your audience with meaning and personality, and has great functionality across latest devices.
                        </Paragraph>
                        <FancyLink destination="/" extraClasses="c-btn" a11yText="Start a project">
                            Start a Project
                        </FancyLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
