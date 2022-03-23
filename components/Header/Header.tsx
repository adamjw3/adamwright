import React from 'react';
import { InView } from 'react-intersection-observer';
import { Desktop, Mobile } from '../Navigation';
import FancyLink from '../FancyLink';
import useDesktop from '../../hooks/useDesktop';
import useStickyNav from '../../hooks/useStickyNav';

function Header() {
    const onShowDesktopMenu = useDesktop();
    const onStickyNav = useStickyNav();

    return (
        <>
            <div className={`c-header__container ${onStickyNav ? 'is-sticky' : ''}`}>
                <div className="l-grid">
                    <div className="c-header__inner">{onShowDesktopMenu ? <Desktop /> : <Mobile />}</div>
                </div>
            </div>
            {onShowDesktopMenu && (
                <InView triggerOnce={true}>
                    {({ inView, ref, entry }) => (
                        <div className={inView ? 'c-header__emailus is-inview' : 'c-header__emailus'} ref={ref}>
                            <strong>Email us</strong>
                            <FancyLink a11yText="email us hello@adamwright.dev" destination="mailto:hello@adamwright.dev">
                                hello@adamwright.dev
                            </FancyLink>
                        </div>
                    )}
                </InView>
            )}
        </>
    );
}

export default Header;
