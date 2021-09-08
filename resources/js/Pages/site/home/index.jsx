import React, { Fragment } from 'react'
import { HiOutlineColorSwatch, HiOutlineLibrary, HiOutlineLightBulb, HiOutlinePuzzle, HiOutlineUsers } from 'react-icons/hi';
import { BiChurch } from "react-icons/bi";
import Layout from '../../../components/site/layout';
import SubBarSite from '../../../components/site/subbar'
const HomeSite = ({ section1, section2, section3, section4 }) => {


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
            <SubBarSite pageName={'Página inicial'}/>
                {section1 &&
                    <div>
                        {
                            section1.map((section, index) => (
                                <div key={index}>
                                    <section className="h-auto border-b border-white" style={{
                                        backgroundImage: `url('/storage/post/${section.posts.featured}')`,
                                        backgroundPosition: 'right',
                                        backgroundColor: '#1E40AF',
                                        backgroundSize: '60%',
                                        backgroundRepeat: 'no-repeat'
                                    }}>

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
                                    </section>
                                </div>
                            ))
                        }
                    </div>
                }

                {section2 &&
                    <div className="bg-gray-200 bg-opacity-20 px-4 md:px-8 lg:px-80 py-20 pt-2">
                        {section2.map((sec2, index2) => (
                            <div key={index2}>
                                <div className="py-8" style={{ fontFamily: "'Comfortaa', cursive" }}>
                                    <h1 className="text-3xl text-center text-gray-100 text-shadow">{sec2.categorytitle}</h1>
                                    <p className="text-xl text-center py-4 text-gray-200">{sec2.descricao}</p>
                                </div>
                                {sec2.posts.map((post2, pIndex2) => (
                                    <div key={pIndex2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        <div className="h-full flex flex-col p-0 shadow bg-white transition duration-600 ease-in-out hover:shadow-lg hover:bg-white" style={{ fontFamily: "'Comfortaa', cursive" }}>
                                            <div className="pb-1 pr-0 bg-gradient-to-r from-yellow-800 to-yellow-600">
                                                <img className="" src={"/storage/post/" + post2.length > 0 ? post2[0].featured : ''} alt="" />
                                            </div>
                                            <h1 className="mt-2 text-2xl uppercase text-center">{post2.title}</h1>
                                            <p className="text-center text-gray-500 text-sm">{post2.summary}</p>
                                            <div className="relative py-6 flex-grow">
                                                <a className="absolute bottom-3 right-4 text-sm text-gray-600 hover:text-gray-500" href="#">+ Veja Mais</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                        }
                    </div>
                }

                {section3 &&
                    <div className="bg-gray-200 bg-opacity-20 px-4 md:px-8 lg:px-80 py-20 pt-2">
                        {section3.map((sec3, index3) => (
                            <div key={index3}>
                                <div className="py-8" style={{ fontFamily: "'Comfortaa', cursive" }}>
                                    <h1 className="text-3xl text-center text-gray-100 text-shadow">{sec3.categorytitle}</h1>
                                    <p className="text-xl text-center py-4 text-gray-200">{sec3.descricao}</p>
                                </div>
                                {sec3.posts.map((post3, pIndex3) => (
                                    <div key={pIndex3} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        <div className="h-full flex flex-col p-0 shadow bg-white transition duration-600 ease-in-out hover:shadow-lg hover:bg-white" style={{ fontFamily: "'Comfortaa', cursive" }}>
                                            <div className="pb-1 pr-0 bg-gradient-to-r from-yellow-800 to-yellow-600">
                                                <img className="" src={"/storage/post/" + post3.length > 0 ? post3[0].featured: ''} alt="" />
                                            </div>
                                            <h1 className="mt-2 text-2xl uppercase text-center">{post3.title}</h1>
                                            <p className="text-center text-gray-500 text-sm">{post3.summary}</p>
                                            <div className="relative py-6 flex-grow">
                                                <a className="absolute bottom-3 right-4 text-sm text-gray-600 hover:text-gray-500" href="#">+ Veja Mais</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                        }
                    </div>
                }

                {section4 &&
                    <div className="bg-gray-200 bg-opacity-20 px-4 md:px-8 lg:px-80 py-20 pt-2">
                        {section4.map((sec4, index4) => (
                            <div key={index4}>
                                <div className="py-8" style={{ fontFamily: "'Comfortaa', cursive" }}>
                                    <h1 className="text-3xl text-center text-gray-100 text-shadow">{sec4.categorytitle}</h1>
                                    <p className="text-xl text-center py-4 text-gray-200">{sec4.descricao}</p>
                                </div>
                                {sec4.posts.map((post4, pIndex4) => (
                                    <div key={pIndex4} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        <div className="h-full flex flex-col p-0 shadow bg-white transition duration-600 ease-in-out hover:shadow-lg hover:bg-white" style={{ fontFamily: "'Comfortaa', cursive" }}>
                                            <div className="pb-1 pr-0 bg-gradient-to-r from-yellow-800 to-yellow-600">
                                                <img className="" src={"/storage/post/" + post4.length > 0 ? post4[0].featured : ''} alt="" />
                                            </div>
                                            <h1 className="mt-2 text-2xl uppercase text-center">{post4.title}</h1>
                                            <p className="text-center text-gray-500 text-sm">{post4.summary}</p>
                                            <div className="relative py-6 flex-grow">
                                                <a className="absolute bottom-3 right-4 text-sm text-gray-600 hover:text-gray-500" href="#">+ Veja Mais</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                        }
                    </div>
                }

            </Layout>
        </Fragment>

    )
}

export default HomeSite
