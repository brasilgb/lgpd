import React, { Fragment } from 'react'
import Layout from '../../../components/admin/layout'

const CategoriesAdmin = ({ title }) => {
    return (
        <Fragment>
            <Layout>
                <h1>categorias {title}</h1>

            </Layout>
        </Fragment>
    )
}

export default CategoriesAdmin
