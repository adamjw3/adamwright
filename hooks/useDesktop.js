import { useState, useEffect } from 'react';

const useDesktop = () => {
    const mediaQuery = 'screen and (min-width: 1280px)';
    const [showDesktopMenu, setShowDesktopMenu] = useState(null);

    useEffect(() => {
        const mql = window.matchMedia(mediaQuery);
        setShowDesktopMenu(mql.matches);

        const handleMediaChange = function () {
            setShowDesktopMenu(this.matches);
        };
        mql.addEventListener('change', handleMediaChange);
        setShowDesktopMenu(mql.matches);

        return () => {
            mql.removeEventListener('change', handleMediaChange);
        };
    }, []);

    return showDesktopMenu;
};

export default useDesktop;
