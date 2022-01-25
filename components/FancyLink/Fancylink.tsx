import React from 'react';
import Link from 'next/link';

export interface FancyLinkProps {
    destination: string;
    a11yText: string;
    extraClasses?: string;
    children: React.ReactNode;
}

const FancyLink: React.FC<FancyLinkProps> = ({ destination, a11yText, extraClasses, children }) => {
    return (
        <Link href={destination}>
            <a aria-label={a11yText} className={`${extraClasses}`}>
                {children}
            </a>
        </Link>
    );
};

export default FancyLink;
