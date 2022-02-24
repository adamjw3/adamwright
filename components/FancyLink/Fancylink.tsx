import React from 'react';
import Link from 'next/link';

export interface FancyLinkProps {
    destination: string;
    a11yText: string;
    extraClasses?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const FancyLink: React.FC<FancyLinkProps> = ({ destination, a11yText, extraClasses = '', children, onClick }) => {
    return (
        <Link href={destination}>
            <a aria-label={a11yText} className={`${extraClasses}`} onClick={onClick}>
                {children}
            </a>
        </Link>
    );
};

export default FancyLink;
