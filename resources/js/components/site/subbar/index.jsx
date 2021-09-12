import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import React, { Fragment } from 'react'
import { FaUserLock, FaUserTie } from 'react-icons/fa'
import route from 'ziggy'

const subBarSite = ({ pageName }) => {

    const { sections } = usePage().props
    return (
        <Fragment>
            <div className="bg-gray-100 py-6">
                <div className="container p-2 md-p0 mx-auto flex flex-col md:flex-row items-center justify-center">

                    <div className="flex-auto mb-4 md:mb-0">
                        <div className="flex items-center text-left font-semibold">
                            <div className="text-gray-400 text-sm md:text-lg">Portal da Transparência Grupo Solar</div>
                            <div className=" text-gray-400 text-sm md:text-lg px-1">
                                /
                            </div>
                            <div className="text-gray-500 text-md md:text-lg">{pageName}</div>
                        </div>
                    </div>

                    <div className="flex md:justify-items-end justify-items-center">

                        <InertiaLink
                            type="button"
                            as="button"
                            href={sections.button1 == 0 ? '#' : route('pagina', sections.button1)}
                            className="flex py-2 px-4 items-center bg-blue-700 hover:bg-blue-600 text-white shadow rounded-md"
                        >
                            <span>Fale com o DPO</span> <FaUserTie className="ml-2" />
                        </InertiaLink>

                        <InertiaLink
                            type="button"
                            as="button"
                            href={sections.button2 == 0 ? '#' : route('pagina', sections.button2)}
                            className="flex ml-4 py-2 px-4 items-center bg-blue-700 hover:bg-blue-600 text-white shadow rounded-md"
                        >
                            <span>Sobre o titular de dados</span> <FaUserLock className="ml-2" />
                        </InertiaLink>

                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default subBarSite
