import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import React, { Fragment, useState } from 'react'
import { HiUserCircle } from 'react-icons/hi'
import route from 'ziggy'
const NavbarAdmin = () => {

    const { auth } = usePage().props;

    const setLogout = (e) => {
        e.preventDefault();
        Inertia.post(route('logout'));
    }

    const setUserProfile = (e) => {
        e.preventDefault();
        Inertia.get(route('usuario.show', auth.user.id_user));
    }

    const [menuUserOpen, setMenuUserOpen] = useState(false);
    return (
        <Fragment>
            <nav className="bg-blue-500 shadow dark:bg-blue-500">
                <div className="container px-6 py-4 mx-auto">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex items-center justify-between">
                            <div className="text-xl font-semibold text-gray-700">
                                {/* <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a> */}
                            </div>

                            {/* <!-- Mobile menu button --> */}
                            <div className="flex md:hidden">
                                {/* <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button> */}
                            </div>
                        </div>

                        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                        <div className="flex-1 md:flex md:items-center md:justify-between">
                            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                                {/* <a href="#" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Join Slack</a>
                                <a href="#" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Browse Topics</a>
                                <a href="#" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Random Item</a>
                                <a href="#" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Experts</a>
                             */}
                            </div>
                            <div className="flex justify-end mr-2 lg:flex lg:mt-0 lg:-mx-2">
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="relative z-10 block" aria-label="toggle profile dropdown"
                                        onClick={() => setMenuUserOpen(!menuUserOpen)}
                                    >
                                        <div className="overflow-hidden rounded-full">
                                            <HiUserCircle className="text-gray-100 text-3xl" />
                                        </div>

                                    </button>

                                    <div className={"absolute right-0 z-20 w-48 p-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800" +
                                        (menuUserOpen ? " block" : " hidden")
                                    }>
                                        <InertiaLink
                                            className="w-full block flex justify-left px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-100 hover:text-gray-500 dark:hover:text-white"
                                            as="button"
                                            type="button"
                                            href="#"
                                            onClick={setUserProfile}
                                        >
                                            <span>Seu perfil</span>
                                        </InertiaLink>
                                        <InertiaLink
                                            className="w-full flex justify-left px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-100 hover:text-gray-500 dark:hover:text-white"
                                            as="button"
                                            type="button"
                                            href="#"
                                            onClick={setLogout}
                                        >
                                            <span> Sair</span>
                                        </InertiaLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavbarAdmin
