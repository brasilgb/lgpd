import React, { Fragment } from 'react'

import FooterSite from '../footer'
import NavbarSite from '../navbar'


const Layout = ({ children }) => {
    return (
        <Fragment>
            <div className="flex flex-col min-h-screen">
                <div className="w-full bg-gray-800">
                    <NavbarSite />
                </div>

                <div className="bg-gray-200 flex-grow">
                    {children}
                </div>

                <div className="w-full">
                    <FooterSite />
                </div>
            </div>
        </Fragment>
    )
}

export default Layout
