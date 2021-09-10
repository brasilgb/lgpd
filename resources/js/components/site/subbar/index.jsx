import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import React, { Fragment } from 'react'
import { FaUserTie } from 'react-icons/fa'
import { RiAdminFill } from 'react-icons/ri'

const subBarSite = ({ pageName }) => {

    const { pages } = usePage().props
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

                        {pages.map((page, index) => (
                            <div key={index}>
                                {page.dpo == 1 &&
                                    <InertiaLink
                                        type="button"
                                        as="button"
                                        href={route('pagina', page.slug)}
                                        className="flex py-2 px-4 items-center bg-blue-700 hover:bg-blue-600 text-white shadow rounded-md capitalize"
                                    >
                                        <span>Fale com o DPO</span> <FaUserTie className="ml-2" />
                                    </InertiaLink>
                                }
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default subBarSite
