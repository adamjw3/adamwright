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
                            Ready when you are!
                        </Heading>
                    </div>
                    <div className="c-start-project__intro">
                        <Paragraph tag="p" className="para-small">
                            I take on all types of projects from new to existing brands, maintaining current sites or producing something new.
                        </Paragraph>
                    </div>
                    <FancyLink destination="/" a11yText="text" extraClasses="c-start-project__btn c-btn">
                        Start a project
                    </FancyLink>
                </header>
            </div>
        </div>
    );
};

export default StartProject;
