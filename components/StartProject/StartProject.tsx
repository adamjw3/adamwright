import React from 'react';
import FancyLink from '../FancyLink';

const StartProject: React.FC = () => {
    return (
        <div className="c-start-project">
            <div className="c-start-project__inner">
                <header>
                    <h2 className="c-start-project__header heading-large">Lets make something great toegther.</h2>
                    <p className="c-start-project__intro">
                        We are UK Shopify Experts from Manchester and we help independent brands like yours to level-up their Shopify and digital marketing expertise so you can focus on running your
                        business.
                    </p>
                    <FancyLink destination="/" a11yText="text" extraClasses="c-start-project__btn c-btn">
                        Start a projects
                    </FancyLink>
                </header>
            </div>
        </div>
    );
};

export default StartProject;
