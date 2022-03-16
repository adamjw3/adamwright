import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Locoscroll from '../LocoScroll';

const Layout = ({ children }) => {
    return (
        <Locoscroll>
            <div className="l-grid l-grid-outter">
                <Header />
                {children}
                <Footer />
            </div>
        </Locoscroll>
    );
};

export default Layout;
