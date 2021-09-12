import { usePage, Head } from '@inertiajs/inertia-react'
import React, { Fragment } from 'react'
import FooterAdmin from '../footer'
import NavbarAdmin from '../navbar'
import SidebarAdmin from '../sidebar'

const Layout = ({ children }) => {

    const { settings } = usePage().props

    return (
        <Fragment>
            <Head>
                <link rel="icon" type="image/svg+xml" href={"/storage/images/" + settings.logo} />
            </Head>
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