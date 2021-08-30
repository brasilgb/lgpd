import React, { Fragment, useState } from 'react'
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { BiLogIn } from 'react-icons/bi';
import route from 'ziggy';
import useDocumentScrollThrottled from '../../../hooks';

import "../../../../../public/css/styles.css";

const navBarSite = () => {
    const { settings } = usePage().props;

    const logo = settings.logo ? settings.logo:'default.jpg';

    const openAdmin = (e) => {
        e.preventDefault();
        Inertia.get(route('admin'));
    };

    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

      setShouldShowShadow(currentScrollTop > 2);

      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    });

    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (
        <Fragment>
            <nav className={`bg-blue-500 header ${shadowStyle} ${hiddenStyle}`}>
                <div className="container mx-auto">
                    <div className="py-2 md:flex md:items-center md:justify-between">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <a className="" href="#"><img className="h-10" src={'/storage/images/' + logo} alt={settings.title} /></a>
                            </div>

                            {/* <!-- Mobile menu button --> */}
                            <div className="flex md:hidden">
                                {/* <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <HiMenu/>
                                </button> */}
                            </div>
                        </div>

                        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                        <div className="flex-1 md:flex md:items-center md:justify-between">

                            <div className="container flex items-center justify-center p-4 mx-auto text-gray-100 uppercase font-semibold dark:text-gray-300">

                                <a href="#" class="text-yellow-500 dark:text-gray-200 border-b-2 border-yellow-500 mx-1.5 sm:mx-6">home</a>

                                <a href="#" class="border-b-2 border-transparent hover:text-yellow-500 dark:hover:text-gray-200 hover:border-yellow-500 mx-1.5 sm:mx-6">features</a>

                                <a href="#" class="border-b-2 border-transparent hover:text-yellow-500 dark:hover:text-gray-200 hover:border-yellow-500 mx-1.5 sm:mx-6">pricing</a>

                                <a href="#" class="border-b-2 border-transparent hover:text-yellow-500 dark:hover:text-gray-200 hover:border-yellow-500 mx-1.5 sm:mx-6">blog</a>

                            </div>

                            <div className="flex justify-center mt-4 lg:flex lg:mt-0 lg:-mx-2">
                                <div className="relative">
                                    <button
                                        title="Acesso administrativo"
                                        className="relative z-10 block" aria-label="toggle profile dropdown"
                                        onClick={openAdmin}
                                    >
                                        <div className="overflow-hidden rounded-full">
                                            <BiLogIn className="text-gray-100 text-3xl hover:text-yellow-500" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default navBarSite

