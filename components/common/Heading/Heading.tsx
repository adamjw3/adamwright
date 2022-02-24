import React from 'react';

export interface HeadingProps {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    className: 'heading' | 'heading-xxlarge' | 'heading-xlarge' | 'heading-large' | 'heading-small';
}

const Heading: React.FC<HeadingProps> = ({ tag, className, children }) => {
    const Component = tag;
    return <Component className={className}>{children}</Component>;
};

export default Heading;
