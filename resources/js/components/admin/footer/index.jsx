import React, { Fragment } from 'react'
import { RiCopyrightLine } from 'react-icons/ri'
const FooterAdmin = () => {

        let data = new Date();
        let ano = data.getFullYear();

    return (
        <Fragment>

            <footer className="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">

                <p className="py-2 text-gray-800 dark:text-white sm:py-0 m-auto">&copy;{ano} Solar Comércio e Agroindústria Ltda. Todos os direitos reservados. | Desenvolvido por TI - Sistemas | Grupo Solar</p>

            </footer>
        </Fragment>
    )
}

export default FooterAdmin
