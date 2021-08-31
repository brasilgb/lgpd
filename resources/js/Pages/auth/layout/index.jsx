import React, { Fragment } from 'react'

const Layout = ({children}) => {
    return (
        <Fragment>
            <div className="flex flex-col justify-center h-screen bg-gray-100">
            {children}
            </div>
        </Fragment>
    )
}

export default Layout
