import { usePage, Head } from '@inertiajs/inertia-react'
import React, { Fragment } from 'react'

const Layout = ({ children }) => {

    const { settings } = usePage().props

    return (
        <Fragment>
            <Head>
                <link rel="icon" type="image/svg+xml" href={"/storage/images/" + settings.logo} />
            </Head>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
                { children }
            </div>
        </Fragment>
    )
}

export default Layout
