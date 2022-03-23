import React from 'react';
import { InView } from 'react-intersection-observer';

const SplitText = ({ words }) => {
    return (
        <>
            {words.split(' ').map((item, index) => {
                return (
                    <span key={index} className="c-split-text">
                        <InView triggerOnce={true}>
                            {({ inView, ref, entry }) => (
                                <span ref={ref} className={inView ? 'c-split-text__word is-inview' : 'c-split-text__word'} style={{ transitionDelay: `${index / 8}ms` }}>
                                    {item}&nbsp;
                                </span>
                            )}
                        </InView>
                    </span>
                );
            })}
        </>
    );
};

export default SplitText;
