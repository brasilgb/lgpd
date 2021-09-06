import { usePage } from '@inertiajs/inertia-react';
import React, { Fragment, useState } from 'react';
import { HiOutlineArrowCircleUp } from 'react-icons/hi';
import FooterSite from '../footer';
import NavBarSite from '../navbar';

const Layout = ({ children }) => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 200) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 200) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <Fragment>
            <div className="flex flex-col min-h-screen">

                <div className="w-full z-50 pt-20">
                    <NavBarSite />
                </div>

                <div className="bg-gray-200 flex-grow">
                    {children}
                </div>

                <div className="w-full">
                    <FooterSite />
                </div>

                <HiOutlineArrowCircleUp className="scrollTop text-blue-700" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
            </div>
        </Fragment>
    )
};

Layout.displayName = "Layout Site";
export default Layout;
