import React from 'react';

const SplitText = ({ words }) => {
    return (
        <>
            {words.split(' ').map((item, index) => {
                return (
                    <span key={index} className="c-split-text">
                        <span className="c-split-text__word">{item}&nbsp;</span>
                    </span>
                );
            })}
        </>
    );
};

export default SplitText;
