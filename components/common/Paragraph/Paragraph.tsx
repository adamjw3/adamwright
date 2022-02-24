import React from 'react';

export interface ParagraphProps {
    tag?: 'p' | 'span';
    className: 'para' | 'para-small' | 'para-large';
}

const Paragraph: React.FC<ParagraphProps> = ({ tag = 'p', className, children }) => {
    const Componet = tag;

    return <Componet className={className}>{children}</Componet>;
};

export default Paragraph;
