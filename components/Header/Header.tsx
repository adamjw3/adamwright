import React from 'react';
import { Desktop, Mobile } from '../Navigation';
import FancyLink from '../FancyLink';
import useDesktop from '../../hooks/useDesktop';
import useStickyNav from '../../hooks/useStickyNav';

function Header() {
    const onShowDesktopMenu = useDesktop();
    const onStickyNav = useStickyNav();

    return (
        <>
            <div className={`c-header__container ${onStickyNav ? 'is-sticky' : ''}`} data-scroll-section>
                <div className="l-grid">
                    <div className="c-header__inner">{onShowDesktopMenu ? <Desktop /> : <Mobile />}</div>
                </div>
            </div>
            {onShowDesktopMenu && (
                <>
                    <div className="c-header__emailus">
                        <strong>Email us</strong>
                        <FancyLink a11yText="email us hello@adamwright.dev" destination="mailto:hello@adamwright.dev">
                            hello@adamwright.dev
                        </FancyLink>
                    </div>
                </>
            )}
        </>
    );
}

export default Header;
