import React, { Fragment } from 'react'
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import route from 'ziggy';

const FooterSite = () => {

    const { settings, categories, pages } = usePage().props;
    const logo = settings.logo ? settings.logo : 'default.jpg';
    const openLink = (e, slug) => {
        e.preventDefault();
        console.log(slug);
        Inertia.get(route('categoria', slug));
    };

    return (
        <Fragment>

            <div className="container px-6 py-4 mx-auto">

                <nav>
                    <div className="container mx-auto">
                        <div className="py-2 md:flex md:items-center md:justify-between h-22">
                            <div className="flex-1 md:flex md:items-center md:justify-between">
                                <div className="flex items-center justify-between">
                                    <div className="">
                                        <InertiaLink
                                            className=""
                                            href="/">
                                            <img className="h-20 rounded-full bg-blue-600" src={'/storage/images/' + logo} alt={settings.title} />
                                        </InertiaLink>
                                    </div>

                                    {/* <!-- Mobile menu button --> */}
                                    <div className="flex md:hidden">
                                        {/* <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <HiMenu/>
                                </button> */}
                                    </div>
                                </div>
                                <div className="container flex justify-center p-4 mx-auto text-gray-800">
                                    <InertiaLink
                                        href={'/'}
                                        className="px-4 capitalize underline hover:no-underline"
                                    >
                                        home
                                    </InertiaLink>

                                    {pages.map((page, index) => (
                                        (page.active == 1 &&
                                            <InertiaLink
                                                key={index}
                                                href={route('pagina', page.slug)}
                                                className="px-4 capitalize underline hover:no-underline">
                                                {page.title}
                                            </InertiaLink>
                                        )
                                    ))}

                                    {categories.map(function (menuItem, i) {
                                        if (menuItem.active == 1) {
                                            return (
                                                <div key={i}>
                                                    {menuItem.parent == 0 &&
                                                        <InertiaLink
                                                            onClick={(e) => menuItem.sub_categories.length == 0 ? openLink(e, menuItem.slug) : '#'}
                                                            className={`px-4 py-2 capitalize
                                                            ${menuItem.sub_categories.length == 0 ? 'underline hover:no-underline' : 'cursor-text'}`}
                                                        >
                                                            {menuItem.categoryname}
                                                        </InertiaLink>
                                                    }

                                                    {menuItem.sub_categories.map(function (subMenu, i) {
                                                        return (
                                                            <InertiaLink
                                                                key={i}
                                                                href={route('categoria', subMenu.slug)}
                                                                className="block px-4 py-2 text-sm text-gray-700 capitalize underline hover:no-underline"
                                                            >
                                                                {subMenu.categoryname}
                                                            </InertiaLink>
                                                        );
                                                    })}

                                                </div>
                                            );
                                        }
                                    })}
                                    <a
                                        href="#"
                                        className="px-4 capitalize underline hover:no-underline">
                                        Contato
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <footer className="bg-gray-100">
                <div>
                    <p className="text-center text-gray-800 py-4">© Grupo Solar. Todos os direitos reservados.</p>
                </div>
            </footer>

        </Fragment>
    )
}

export default FooterSite
