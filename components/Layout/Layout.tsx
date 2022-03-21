import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="l-grid l-grid-outter">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
