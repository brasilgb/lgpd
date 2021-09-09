import { InertiaLink } from '@inertiajs/inertia-react'
import React, { Fragment } from 'react'
import { FaUserTie } from 'react-icons/fa'
import { RiAdminFill } from 'react-icons/ri'
import { MdKeyboardArrowRight } from 'react-icons/md'

const subBarSite = ({pageName}) => {
    return (
        <Fragment>
            <div className="bg-gray-100 py-6">
                <div className="container mx-auto flex items-center justify-center ">
                    <div className="flex-auto ">
                        <p className="flex items-center text-left text-md text-gray-900 text-shadow">Portal da Transparência Grupo Solar <MdKeyboardArrowRight className="text-3xl"/> {pageName}</p>
                    </div>
                    <div className="flex items-center justify-items-end">
                        <InertiaLink
                            type="button"
                            as="button"
                            href="#"
                            className="flex py-2 px-4 mx-4 items-center bg-blue-700 hover:bg-blue-600 text-white shadow rounded-md transition:2ms"
                        >
                            <span>Fale com o DPO</span> <FaUserTie className="ml-2"/>
                        </InertiaLink>

                        <InertiaLink
                            type="button"
                            as="button"
                            href="#"
                            className="flex py-2 px-4  items-center bg-blue-700 hover:bg-blue-600 text-white shadow rounded-md"
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
