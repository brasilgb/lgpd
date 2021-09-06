import React, { Fragment, useEffect } from 'react'
import { HiOutlineColorSwatch, HiOutlineLibrary, HiOutlineLightBulb, HiOutlinePuzzle, HiOutlineUsers } from 'react-icons/hi';
import { BiChurch } from "react-icons/bi";
import Layout from '../../../components/site/layout';
import { FiFacebook } from 'react-icons/fi';
import { usePage } from '@inertiajs/inertia-react';

const HomeSite = ({ section1, section2, section3, section4 }) => {

    const { categories } = usePage().props


    const iconSevices = (index) => {

        switch (index) {
            case 0: return <HiOutlineLightBulb />
            case 1: return <HiOutlineColorSwatch />
            case 2: return <HiOutlinePuzzle />
            case 3: return <HiOutlineLibrary />
        }

    }

    const iconClientes = (index) => {

        switch (index) {
            case 0: return <BiChurch />
            case 1: return <HiOutlineLibrary />
            case 2: return <HiOutlineUsers />
        }

    }

    return (

        <Fragment>

            <Layout>
                <div className="bg-white py-10">
                    <p className="text-xl text-gray-900 text-shadow text-center">Você está acessando o portal da transparência do Grupo Solar</p>
                </div>
                {section1 &&
                    <section className="h-auto border-b border-white" style={{
                        backgroundImage: `url('/storage/post/${section1[0].posts[0].featured}')`,
                        backgroundPosition: 'right',
                        backgroundColor: '#1E40AF',
                        backgroundSize: '60%',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        {section1.map((section, index) => (
                            <div key={index}>
                                <div className="container mx-auto">
                                    <div className="items-center lg:flex">
                                        <div className="h-96 flex items-center justify-left w-full rounded-r-full bg-gradient-to-r from-blue-800 to-blue-700 lg:w-7/12">
                                            <div className="lg:max-w-lg">
                                                <h1 className="text-2xl font-semibold text-gray-200 uppercase dark:text-white lg:text-3xl">{section.categorytitle}</h1>
                                                <p className="mt-2 text-gray-500 dark:text-gray-400">{section.descricao}</p>
                                                <button className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-800 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                                                    + Ver mais
                                                </button>
                                            </div>
                                        </div>
                                        <div className="h-96 flex items-center justify-rigth w-full mt-6 lg:mt-0 lg:w-5/12">
                                            {/* <img className="w-full h-80 rounded-l-full" src={"/storage/post/" + category.posts[0].featured} alt="" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                }
                {section2[0] &&
                    <div className="h-80 px-4 md:px-8 lg:px-80 py-20 pt-2 pb-20 bg-white">
                        <div className="py-8">
                            <h1 className="text-3xl text-center text-shadow text-red-900">{section2[0].categorytitle}</h1>
                            <p className="text-xl text-center py-4">{section2[0].descricao}</p>
                        </div>
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {section2.map((section, index) => (
                                <div key={index}>
                                    <div className="shadow bg-white transition duration-600 ease-in-out hover:shadow-lg hover:bg-white">
                                        <div className="pb-1 bg-gradient-to-r from-yellow-800 to-yellow-600">
                                            <img className="h-44 w-full" src={"/storage/post/" + section.featured} alt="" />
                                        </div>
                                        <div className="flex justify-center pt-4">
                                            <h1 className="text-6xl ">{iconSevices(index)}</h1>
                                        </div>
                                        <h1 className="mt-2 text-2xl uppercase text-center">{section.title}dfdsfdf</h1>
                                        <div className="flex justify-end py-3 px-4">
                                            <a className="text-sm text-gray-600 hover:text-gray-500" href="#">+ Veja Mais</a>
                                        </div>

                                    </div>
                                </div>
                            ))
                            }
                        </section>
                    </div>
                }


                {section4[0] &&
                    <div className="bg-gray-200 bg-opacity-20 px-4 md:px-8 lg:px-80 py-20 pt-2"
                        style={{ backgroundImage: "url('/storage/images/bottom_ars3.jpg')", backgroundSize: "100%" }}
                    >
                        <div className="py-8" style={{ fontFamily: "'Comfortaa', cursive" }}>
                            <h1 className="text-3xl text-center text-gray-100 text-shadow">{section4[0].categorytitle}</h1>
                            <p className="text-xl text-center py-4 text-gray-200">{section4[0].descricao}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {section4.map((section, index) => (
                                <div key={index}>
                                    <div className="h-full flex flex-col p-0 shadow bg-white transition duration-600 ease-in-out hover:shadow-lg hover:bg-white" style={{ fontFamily: "'Comfortaa', cursive" }}>
                                        <div className="pb-1 pr-0 bg-gradient-to-r from-yellow-800 to-yellow-600">
                                            <img className="" src={"/storage/post/" + section.featured} alt="" />
                                        </div>
                                        <h1 className="mt-2 text-2xl uppercase text-center">{section.title}</h1>
                                        <p className="text-center text-gray-500 text-sm">{section.summary}</p>
                                        <div className="relative py-6 flex-grow">
                                            <a className="absolute bottom-3 right-4 text-sm text-gray-600 hover:text-gray-500" href="#">+ Veja Mais</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                }

            </Layout>
        </Fragment>

    )
}

export default HomeSite
