import { InertiaLink } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';
import route from 'ziggy';
import { HiOutlineCog, HiOutlineCollection, HiPencilAlt, HiUsers, HiViewGrid } from 'react-icons/hi';

const SidebarAdmin = () => {
    return (
        <Fragment>
            <div className="flex flex-col h-screen py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src="/storage/images/grupo_solar.png" alt="Grupo Solar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">Grupo Solar</h4>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200" href="#">
                            <HiOutlineCollection />

                            <span className="mx-4 font-medium">Dashboard</span>
                        </a>

                        <InertiaLink
                        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                        href={route('categoria.index')} 
                        >
                            <HiViewGrid />
                            <span className="mx-4 font-medium"> Categorias</span>
                        </InertiaLink>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <HiPencilAlt />
                            <span className="mx-4 font-medium"> Postagens</span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <HiOutlineCog />
                            <span className="mx-4 font-medium"> Configurações</span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <HiUsers />
                            <span className="mx-4 font-medium"> Usuários</span>
                        </a>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default SidebarAdmin
