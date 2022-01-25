import { useState, useEffect } from 'react';

const useStickyNav = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const stickNavbar = function () {
            setSticky(window.scrollY > 10);
        };
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    return sticky;
};

export default useStickyNav;
