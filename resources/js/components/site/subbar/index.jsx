import { InertiaLink } from '@inertiajs/inertia-react'
import React, { Fragment } from 'react'
import { FaUserTie } from 'react-icons/fa'
import { RiAdminFill } from 'react-icons/ri'
import { MdKeyboardArrowRight } from 'react-icons/md'

const subBarSite = ({pageName}) => {
    return (
        <Fragment>
            <div className="bg-gray-100 py-6">
                <div className="container p-2 md-p0 mx-auto flex flex-col md:flex-row items-center justify-center">
                    <div className="flex-auto mb-4 md:mb-0">
                        <div className="flex items-center text-left text-sm md:text-xl text-gray-900 text-shadow">Portal da Transparência Grupo Solar <MdKeyboardArrowRight className="mt-2 text-xl md:text-3xl"/> <span className=""> {pageName}</span></div>
                    </div>
                    <div className="flex md:justify-items-end justify-items-center">
                        <InertiaLink
                            type="button"
                            as="button"
                            href="#"
                            className="flex py-2 mr-1 px-4 md:mx-4 items-center bg-blue-700 hover:bg-blue-600 text-white shadow rounded-md transition:2ms"
                        >
                            <span>Fale com o DPO</span> <FaUserTie className="ml-2"/>
                        </InertiaLink>

                        <InertiaLink
                            type="button"
                            as="button"
                            href="#"
                            className="flex py-2 ml-1 px-4 items-center bg-blue-700 hover:bg-blue-600 text-white shadow rounded-md"
                        >
                            <span>Acesso do titular de dados</span> <RiAdminFill className="ml-2"/>
                        </InertiaLink>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default subBarSite
