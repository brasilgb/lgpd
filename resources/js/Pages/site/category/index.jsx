import React, { Fragment } from 'react'
import Layout from '../../../components/site/layout'

const categorySite = ({ categories }) => {
console.log(categories);
    return (
        <Layout>
            <Fragment>
                <h1>{categories.categoryname}</h1>
            </Fragment>
        </Layout>
    )
}

export default categorySite
