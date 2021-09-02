import { usePage } from '@inertiajs/inertia-react';
import React, { Fragment, useState } from 'react';
import { FiFacebook } from "react-icons/fi";
import { HiOutlineArrowCircleUp } from 'react-icons/hi';
import FooterSite from '../footer';
import NavBarSite from '../navbar';

const Layout = ({ children }) => {

    const { settings } = usePage().props;
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
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
                <div className="w-full bg-black pb-16 z-50">
                    <NavBarSite />
                </div>

                <div className="bg-gray-200 flex-grow">
                    {children}
                </div>

                <div className="w-full">
                    <FooterSite />
                </div>
                <HiOutlineArrowCircleUp className="scrollTop text-yellow-400" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
            </div>
        </Fragment>
    )
};

Layout.displayName = "Layout Site";
export default Layout;
