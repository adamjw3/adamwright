import React from 'react';
import FancyLink from '../FancyLink';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';

const StartProject: React.FC = () => {
    return (
        <div className="c-start-project">
            <div className="c-start-project__inner">
                <header>
                    <div className="c-start-project__header">
                        <Heading tag="h2" className="heading-xlarge">
                            Lets make something great toegther.
                        </Heading>
                    </div>
                    <div className="c-start-project__intro">
                        <Paragraph tag="p" className="para-small">
                            We are UK Shopify Experts from Manchester and we help independent brands like yours to level-up their Shopify and digital marketing expertise so you can focus on running
                            your business.
                        </Paragraph>
                    </div>
                    <FancyLink destination="/" a11yText="text" extraClasses="c-start-project__btn c-btn">
                        Start a projects
                    </FancyLink>
                </header>
            </div>
        </div>
    );
};

export default StartProject;
