import React, { Fragment } from 'react'
import Layout from '../../../components/admin/layout'
const HomeAdmin = (props) => {
    return (
        <Layout>
            <Fragment>
                <h1>Isto é o home!!{props.title}</h1>
            </Fragment>
        </Layout>

    )
}

export default HomeAdmin
