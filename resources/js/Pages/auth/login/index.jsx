import { usePage } from '@inertiajs/inertia-react';
import React, { Fragment, useRef } from 'react'
import { BiLogIn } from 'react-icons/bi'
import Layout from '../layout'
import route from 'ziggy';
import { Inertia } from '@inertiajs/inertia';

const Login = () => {

    const { settings, errors } = usePage().props;

    const logo = settings.logo ? settings.logo : 'default.jpg';

    const emailRef = useRef();
    const passwordRef = useRef();

    const loginAccess = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        Inertia.post(route('login'), { email, password });
    };
    return (
        <Layout>
            <Fragment>

                <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg border shadow-md dark:bg-gray-800">
                    <div className="px-6 py-4">
                        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Logo</h2>

                        <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Bem vindo!</h3>

                        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Faça login para acessar.</p>

                        <form onSubmit={loginAccess}>
                            <div className="w-full mt-4">
                                <input
                                    ref={emailRef}
                                    className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring 
                                    ${errors.email ? 'border-red-500' : ''}`}
                                    type="email"
                                    placeholder="E-mail"
                                    aria-label="Email Address" />
                            </div>
                            {errors.email && <div className="text-red-500 text-sm p-1">{errors.email}</div>}

                            <div
                                className="w-full mt-4">
                                <input
                                    ref={passwordRef}
                                    className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring
                                ${errors.password ? 'border-red-500' : ''}`}
                                    type="password"
                                    placeholder="Senha"
                                    aria-label="Password" />
                            </div>
                            {errors.password && <div className="text-red-500 text-sm p-1">{errors.email}</div>}

                            <div className="flex items-center justify-between mt-4">
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Perdeu a senha?</a>

                                <button

                                    className="flex justify-center px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
                                    type="submit"
                                >
                                    <span>Login</span>  <BiLogIn className="text-gray-100 text-xl hover:text-yellow-500" />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* <div className="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                        <a href="#" className="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">Register</a>
                    </div> */}
                </div>


            </Fragment>
        </Layout>
    )
}

export default Login
