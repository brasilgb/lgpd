import React, { Fragment, useRef, useState } from 'react'
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { BiLogIn } from 'react-icons/bi';
import route from 'ziggy';
import useDocumentScrollThrottled from '../../../hooks';

import "../../../../../public/css/styles.css";

const navBarSite = () => {
    const { settings, categories, pages } = usePage().props;

    const logo = settings.logo ? settings.logo : 'default.jpg';

    const openAdmin = (e) => {
        e.preventDefault();
        Inertia.get(route('admin'));
    };
    const openLink = (e, slug) => {
        e.preventDefault();
        Inertia.get(route('categoria', slug));
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

    const [menuCategoryOpen, setMenuCategoryOpen] = useState([false, false]);

    const toggleSubMenu = (e, i) => {
        e.preventDefault()

        const clone = menuCategoryOpen.slice(0)

        const newState = clone.map((val, index) => {
            if (index === i) {
                return val
            }
            return false
        })
        newState[i] = !newState[i]
        setMenuCategoryOpen(newState)
    };

    return (
        <Fragment>
            <nav className={`bg-blue-500 header ${shadowStyle} ${hiddenStyle}`}>
                <div className="container mx-auto">
                    <div className="py-2 md:flex md:items-center md:justify-between h-22">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <a
                                    className=""
                                    href="/">
                                    <img className="h-16 rounded-full" src={'/storage/images/' + logo} alt={settings.title} />
                                </a>
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

                            <div className="container flex items-center justify-center p-4 mx-auto text-gray-100">

                                {pages.map((page, index) => (
                                    (page.active == 1 &&
                                        <InertiaLink
                                            key={index}
                                            href={route('pagina', page.slug)}
                                            className="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">
                                            {page.title}
                                        </InertiaLink>
                                    )
                                ))}

                                {categories.map(function (menuItem, i) {
                                    if (menuItem.sub_categories != undefined) {
                                        return (
                                            <div key={i}>
                                                <div className="relative z-10 block" aria-label="toggle profile dropdown">

                                                    {menuItem.parent == 0 &&
                                                        <InertiaLink
                                                            href=""
                                                            onClick={(e) => menuItem.sub_categories.length == 0 ? openLink(e, menuItem.slug) : toggleSubMenu(e, i)}
                                                            className="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6"
                                                        >
                                                            {menuItem.categoryname}
                                                        </InertiaLink>
                                                    }

                                                    <div className={"absolute right-0 z-20 w-60 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800" +
                                                        (menuCategoryOpen[i] ? " block" : " hidden")
                                                    }>
                                                        {menuItem.sub_categories.map(function (subMenu, i) {
                                                            return (
                                                                <InertiaLink
                                                                    key={i}
                                                                    href={route('categoria', subMenu.slug)}
                                                                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                                                                >
                                                                    {subMenu.categoryname}
                                                                </InertiaLink>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}

                                <a
                                    href="#"
                                    className="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">
                                    Contato
                                </a>
                            </div>

                            <div className="flex justify-center mt-4 lg:flex lg:mt-0">
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

