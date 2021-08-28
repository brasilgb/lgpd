import React, { Fragment } from 'react'
import FooterAdmin from '../footer'
import NavbarAdmin from '../navbar'
import SidebarAdmin from '../sidebar'

const Layout = ({ children }) => {

    return (
        <Fragment>
            <div className="flex">
                <div className="h-screen stiky w-64 hidden lg:block">
                    <SidebarAdmin />
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full">
                        <NavbarAdmin />
                    </div>
                    <div className="h-full w-full bg-gray-200 flex-grow">
                        <div className="app p-4">
                            {children}
                        </div>
                    </div>
                    <div className="w-full">
                        <FooterAdmin />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Layout.displayName = "Layout Admin";
export default Layout;