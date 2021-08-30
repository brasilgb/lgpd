import React, { Fragment } from 'react'
import { HiOutlineColorSwatch, HiOutlineLibrary, HiOutlineLightBulb, HiOutlinePuzzle, HiOutlineUsers } from 'react-icons/hi';
import { BiChurch } from "react-icons/bi";
import Layout from '../../../components/site/layout';
import { FiFacebook } from 'react-icons/fi';

const HomeSite = ({ section1, section2, section3, section4 }) => {
console.log(section1);
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
            <div className="flex bg-gray-100 py-10 px-40">
                    <div className="auto">
                        <h1 className="text-5xl text-yellow-900 text-shadow">Grupo Solar</h1>
                    </div>
                    
                    <div className="flex-1 pt-2 pl-10">
                        <p className="text-4xl text-gray-700 text-shadow text-left">Você está acessando o portal da transparência do Grupo Solar</p>
                    </div>
                    <div className="auto text-right">
                        <a
                            href="https://www.facebook.com/arsartesacra/"
                            className="text-5xl text-yellow-900 hover:text-yellow-800 text-shadow"
                        >
                            <FiFacebook />
                        </a>
                    </div>
                </div>
            {section1[0] &&
                    <section className="bg-gradient-to-r from-yellow-900 to-yellow-700 border-b border-white" style={{ backgroundImage: "url('/storage/images/hero_ars.jpg')" }}>
                        {section1.map((section, index) => (
                            <div key={index}>
                                <div class="container px-6 py-16 mx-auto">
                                    <div class="items-center lg:flex">
                                        <div class="w-full lg:w-1/2">
                                            <div class="lg:max-w-lg">
                                                <h1 class="text-2xl font-semibold text-gray-200 uppercase dark:text-white lg:text-3xl">{section.title}</h1>
                                                <p class="mt-2 text-gray-500 dark:text-gray-400">{section.summary}</p>
                                                <button class="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-800 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                                                    + Ver mais
                                                </button>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                            <img class="w-full h-full lg:max-w-2xl shadow-lg border-2 border-white" src={"/storage/post/" + section.featured} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                }
                {section2[0] &&
                    <div className="px-4 md:px-8 lg:px-80 py-20 pt-2 bg-gray-100">
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
                                        <h1 className="mt-2 text-2xl uppercase text-center">{section.title}</h1>
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

                {section3[0] &&
                    <div className="p-4 md:px-8 lg:px-80 py-20 pt-2 bg-gray-100">
                        <div className="py-8" style={{ fontFamily: "'Comfortaa', cursive" }}>
                            <h1 className="text-3xl text-red-900 text-center text-shadow">{section3[0].categorytitle}</h1>
                            <p className="text-xl text-center py-4">{section3[0].descricao}</p>
                        </div>
                        <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                            {section3.map((section, index) => (
                                <div key={index}>
                                    <div className="p-2 border border-white shadow hover:shadow-lg" style={{ backgroundImage: "url(/storage/post/" + section.featured + ")", backgroundSize: "100%" }}>
                                        <div className="p-4 cursor-pointer bg-white rounded border border-white bg-white bg-opacity-80 hover:bg-opacity-70">
                                            <div className="text-center text-gray-700">
                                                <div className="flex justify-center">
                                                    <h1 className="text-8xl text-gray-800">{iconClientes(index)}</h1>
                                                </div>
                                                <h1 className="text-xl uppercase text-center pt-4">{section.title}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </section>
                    </div>
                }

                {section4[0] &&
                    <div className="bg-yellow-700 bg-opacity-20 px-4 md:px-8 lg:px-80 py-20 pt-2"
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
