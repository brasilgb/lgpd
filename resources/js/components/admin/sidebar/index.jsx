import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';
import route from 'ziggy';
import { HiDocumentDuplicate, HiOutlineCog, HiOutlineCollection, HiPencilAlt, HiUsers, HiViewGrid } from 'react-icons/hi';

const SidebarAdmin = () => {

    const { settings } = usePage().props

    const logo = settings.logo ? settings.logo :'default.jpg';

    return (
        <Fragment>
            <div className="flex flex-col h-screen py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src={"/storage/images/" + logo} alt="Grupo Solar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">Grupo Solar</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">john@example.com</p>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <InertiaLink
                            className={
                                route().current('admin') ?
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 bg-gray-200"
                                    :
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            }
                            href={route('admin')}
                        >
                            <HiOutlineCollection />
                            <span className="mx-4 font-medium">Dashboard</span>
                        </InertiaLink>

                        <InertiaLink
                            className={
                                route().current('categoria.*') ?
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 bg-gray-200"
                                    :
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            }
                            href={route('categoria.index')}
                        >
                            <HiViewGrid />
                            <span className="mx-4 font-medium"> Categorias</span>
                        </InertiaLink>

                        <InertiaLink
                            className={
                                route().current('postagem.*') ?
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 bg-gray-200"
                                    :
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            }
                            href={route('postagem.index')}
                        >
                            <HiPencilAlt />
                            <span className="mx-4 font-medium"> Postagens</span>
                        </InertiaLink>

                        <InertiaLink
                            className={
                                route().current('pagina.*') ?
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 bg-gray-200"
                                    :
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            }
                            href={route('pagina.index')}
                        >
                            <HiDocumentDuplicate />
                            <span className="mx-4 font-medium"> Páginas</span>
                        </InertiaLink>

                        <InertiaLink
                            className={
                                route().current('configuracao.*') ?
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 bg-gray-200"
                                    :
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            }
                            href={route('configuracao')}
                        >
                            <HiOutlineCog />
                            <span className="mx-4 font-medium"> Configurações</span>
                        </InertiaLink>

                        <InertiaLink
                            className={
                                route().current('usuario.*') ?
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 bg-gray-200"
                                    :
                                    "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            }
                            href={route('usuario.index')}
                        >
                            <HiUsers />
                            <span className="mx-4 font-medium"> Usuários</span>
                        </InertiaLink>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default SidebarAdmin
