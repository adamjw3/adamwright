import React from 'react';
import Masonry from 'react-masonry-css';

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
                            <img src="/images/pup.png" alt="" className="c-work__image" />
                            <div className="c-work__content">
                                <h2 className="c-work__title heading">PickupPeople</h2>
                                <div className="c-work__body">
                                    <p className="para">
                                        We completed an in-depth audience-led discovery project to understand how the Open University Business Development Team website needed to be optimised,
                                        incorporating quantitative conversion and content analysis, search intent, and user testing to identify areas of improvement.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="c-work__item">
                        <a href="" className="c-work__link">
                            <img src="/images/step2wellbeing.png" alt="" className="c-work__image" />
                            <div className="c-work__content">
                                <h2 className="c-work__title heading">PickupPeople</h2>
                                <div className="c-work__body">
                                    <p className="para">
                                        We completed an in-depth audience-led discovery project to understand how the Open University Business Development Team website needed to be optimised,
                                        incorporating quantitative conversion and content analysis, search intent, and user testing to identify areas of improvement.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="c-work__item">
                        <a href="" className="c-work__link">
                            <img src="/images/demamiel.png" alt="" className="c-work__image" />
                            <div className="c-work__content">
                                <h2 className="c-work__title heading">PickupPeople</h2>
                                <div className="c-work__body">
                                    <p className="para">
                                        We completed an in-depth audience-led discovery project to understand how the Open University Business Development Team website needed to be optimised,
                                        incorporating quantitative conversion and content analysis, search intent, and user testing to identify areas of improvement.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="c-work__item">
                        <a href="" className="c-work__link">
                            <img src="/images/pup.png" alt="" className="c-work__image" />
                            <div className="c-work__content">
                                <h2 className="c-work__title heading">PickupPeople</h2>
                                <div className="c-work__body">
                                    <p className="para">
                                        We completed an in-depth audience-led discovery project to understand how the Open University Business Development Team website needed to be optimised,
                                        incorporating quantitative conversion and content analysis, search intent, and user testing to identify areas of improvement.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </Masonry>
            </div>
        </div>
    );
};

export default Work;
