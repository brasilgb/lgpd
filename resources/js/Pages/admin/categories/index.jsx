import React, { Fragment } from 'react'
import Layout from '../../../components/site/layout'

const CategoriesAdmin = ({ props }) => {
    return (
        <Fragment>
            <Layout>
                <h1>categorias {props.title}</h1>

            </Layout>
        </Fragment>
    )
}

export default CategoriesAdmin
