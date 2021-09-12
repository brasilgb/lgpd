import React, { Fragment } from 'react'
import { Head, usePage } from '@inertiajs/inertia-react' 
import Layout from '../../../components/admin/layout'
const HomeAdmin = ({ title }) => {

    const { settings } = usePage().props

    return (
        <Layout>
            <Fragment>
                <Head title={settings.title + " - " + title}/>
                <div className="p-4 bg-gray-100 border border-white rounded-lg shadow-md">
                    <h1 className="text-center text-2xl text-gray-600">Portal LGPD Grupo Solar</h1>
                </div>
            </Fragment>
        </Layout>

    )
}

export default HomeAdmin
