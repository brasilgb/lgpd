import React, { Fragment } from 'react'
import Layout from '../../../components/site/layout'

const postSite = ({ posts }) => {
console.log(posts);
    return (
        <Layout>
            <Fragment>
                <h1>{posts.title}</h1>
            </Fragment>
        </Layout>
    )
}

export default postSite