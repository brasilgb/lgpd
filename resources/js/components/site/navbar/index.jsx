import React, { Fragment, useRef, useState } from 'react'
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { BiLogIn } from 'react-icons/bi';
import { AiFillCaretUp } from 'react-icons/ai';
import route from 'ziggy';
import useDocumentScrollThrottled from '../../../hooks';

import "../../../../../public/css/styles.css";
import { HiMenu } from 'react-icons/hi';
import { slice } from 'lodash';

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

    // const [iconFocus, setIconFocus] = useState(iconFocus);
    // if(iconFocus){

    // }

    const [menuOpen, setMenuOpen] = useState(menuOpen);

    return (
        <Fragment>

            <nav className={`bg-blue-500 header ${shadowStyle} ${hiddenStyle}`}>

                {/* <div className="container mx-auto md:flex md:justify-between md:items-center"> */}
                {/* <div className="flex items-center justify-between"> */}

                <div className="container mx-auto px-6 py-4 md:px-0 md:py-0">
                    <div className="md:flex items-center md:justify-between">
                        <div className="flex flex-col md:flex md:items-center md:justify-between">
                            <div className="hidden md:block">
                                <InertiaLink
                                    href={route('home')}>
                                    <img className="h-16 rounded-full" src={'/storage/images/' + logo} alt={settings.title} />
                                </InertiaLink>
                            </div>

                            {/* <!-- Mobile menu button --> */}
                            <div className="flex md:hidden">
                                <button
                                    className="text-gray-100 dark:text-gray-200 hover:text-white dark:hover:text-gray-400 focus:outline-none focus:text-white dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    <HiMenu className="3xl" />
                                </button>
                            </div>
                        </div>

                        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                        <div className={"flex-1 md:flex md:items-center md:justify-between" +
                            (menuOpen ? " block" : " hidden")}>

                            <div className="container flex flex-col md:flex-row md:items-center md:justify-center md:mx-auto text-gray-100">
                                <div className="my-1 md:my-0 py-2 md:hidden">
                                    <span className="p-2 rounded bg-white text-blue-500 font-bold text-lg capitalize">{settings.title}</span>
                                </div>
                                <InertiaLink
                                    href={route('home')}
                                    className={route().current('home') ?
                                        "my-1 md:my-0 md:flex md:p-7 bg-blue-400 capitalize hover:underline"
                                        :
                                        "my-1 md:my-0 md:flex md:p-7 hover:bg-blue-400 capitalize hover:underline"
                                    }
                                >
                                    home
                                </InertiaLink>

                                {pages.map((page, index) => (
                                    (page.active == 1 &&
                                        <InertiaLink
                                            key={index}
                                            href={route('pagina', page.slug)}
                                            className={route().current('pagina') ?
                                            "my-1 md:my-0 md:flex md:p-7 bg-blue-400 capitalize hover:underline"
                                            :
                                            "my-1 md:my-0 md:flex md:p-7 hover:bg-blue-400 capitalize hover:underline"
                                        }
                                        >
                                            {page.title}
                                        </InertiaLink>
                                    )
                                ))}

                                {categories.map(function (menuItem, i) {
                                    if (menuItem.active == 1) {
                                        return (
                                            <div key={i}>
                                                <div className="relative z-10 block" aria-label="toggle profile dropdown">
                                                    {menuItem.parent == 0 &&
                                                        <InertiaLink
                                                            href="#"
                                                            // onFocus={(e) => (menuItem.sub_categories.length == 0 ? false : setIconFocus(i))}
                                                            onClick={(e) => (menuItem.sub_categories.length == 0
                                                                ? openLink(e, menuItem.slug)
                                                                : toggleSubMenu(e, i))}
                                                                className={route().current('categoria') ?
                                                                "my-1 md:my-0 md:flex md:p-7 bg-blue-400 capitalize hover:underline"
                                                                :
                                                                "my-1 md:my-0 md:flex md:p-7 focus:bg-blue-400 hover:bg-blue-400 capitalize hover:underline"
                                                            }
                                                        >
                                                            {menuItem.categoryname}
                                                            {menuCategoryOpen[i] &&
                                                            <div className="absolute w-full left-0 -bottom-2">
                                                            <AiFillCaretUp className="mx-auto text-white text-2xl"/>
                                                            </div>}
                                                        </InertiaLink>
                                                    }
                                                </div>

                                                <div className={"md:absolute right-0 z-20 w-full md:py-2 mt-0 md:bg-white md:shadow-xl dark:bg-gray-800" +
                                                    (menuCategoryOpen[i] ? " block" : " hidden")
                                                }>
                                                    {/* <AiFillCaretUp className="absolute left-50 text-red-500 -mt-10"/> */}
                                                    <div className="container mx-auto">
                                                        {menuItem.sub_categories.map(function (subMenu, i) {
                                                            return (
                                                                <InertiaLink
                                                                    key={i}
                                                                    href={route('categoria', subMenu.slug)}
                                                                    className="block my-1 md:my-0 px-2 md:px-4 md:py-2 text-md text-gray-100 hover:text-white md:text-gray-600 hover:text-gray-500 capitalize transition-colors duration-200 transform dark:text-gray-300 dark:hover:text-white"
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

                                <InertiaLink
                                    href="#"
                                    className="my-1 md:my-0 md:p-7 flex focus:bg-blue-400 hover:bg-blue-400 capitalize hover:underline">
                                    Contato
                                </InertiaLink>
                            </div>

                            <div className="flex justify-left md:justify-center lg:mt-4 lg:flex lg:mt-0 lg:block">
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

