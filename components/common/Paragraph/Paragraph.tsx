import React from 'react';

export interface ParagraphProps {
    tag?: 'p' | 'span';
    className: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ tag = 'p', className, children }) => {
    const Componet = tag;

    return <Componet className={className}>{children}</Componet>;
};

export default Paragraph;
