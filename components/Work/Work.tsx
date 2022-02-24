import React from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import Heading from '../common/Heading';

const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1,
};

const Work = () => {
    return (
        <div className="c-work">
            <div className="c-work__inner">
                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    <div className="c-work__item">
                        <a href="" className="c-work__link">
                            <div className="c-work__image">
                                <Image src="/images/pup.png" layout="responsive" objectFit="cover" width="652" height="355" alt="" />
                            </div>
                            <div className="c-work__title">
                                <Heading tag="h2" className="heading">
                                    PickupPeople
                                </Heading>
                            </div>
                        </a>
                    </div>
                    <div className="c-work__item">
                        <a href="" className="c-work__link">
                            <div className="c-work__image">
                                <Image src="/images/step2wellbeing.png" layout="responsive" objectFit="cover" width="326" height="497" alt="" />
                            </div>
                            <div className="c-work__title">
                                <Heading tag="h2" className="heading">
                                    Step2Wellbeing
                                </Heading>
                            </div>
                        </a>
                    </div>
                    <div className="c-work__item">
                        <a href="" className="c-work__link">
                            <div className="c-work__image">
                                <Image src="/images/demamiel.png" layout="responsive" objectFit="cover" width="326" height="497" alt="" />
                            </div>
                            <div className="c-work__title">
                                <Heading tag="h2" className="heading">
                                    Demamiel
                                </Heading>
                            </div>
                        </a>
                    </div>
                    <div className="c-work__item">
                        <a href="" className="c-work__link">
                            <div className="c-work__image">
                                <Image src="/images/pup.png" layout="responsive" objectFit="cover" width="652" height="355" alt="" />
                            </div>
                            <div className="c-work__title">
                                <Heading tag="h2" className="heading">
                                    Demamiel
                                </Heading>
                            </div>
                        </a>
                    </div>
                </Masonry>
            </div>
        </div>
    );
};

export default Work;
