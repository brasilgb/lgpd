import React, { Fragment } from 'react'
import Layout from '../../../components/admin/layout'

const SettingsAdmin = ({ title }) => {
    return (
        <Fragment>

            <Layout>
                Configurações {title}
            </Layout>
            
        </Fragment>
    )
}

export default SettingsAdmin
