import React, { Fragment } from 'react'
import { HiIdentification, HiOutlineColorSwatch, HiOutlineLightBulb, HiOutlinePuzzle } from 'react-icons/hi';
import Layout from '../../../components/site/layout';
import SubBarSite from '../../../components/site/subbar'
import { GoArrowSmallRight } from 'react-icons/go'
import { FaFileAlt, FaQuestionCircle, FaUserCheck, FaUserEdit, FaUserLock, FaUsersCog } from 'react-icons/fa';
import { FcTodoList } from 'react-icons/fc';
import route from 'ziggy';
import { RiFolderLockFill } from 'react-icons/ri';

const HomeSite = ({ section1, section2, section3, section4 }) => {
    const iconSec2 = (index, classValue) => {

        switch (index) {
            case 0: return <HiIdentification className={index, classValue}/>
            case 1: return <FaUsersCog className={index, classValue}/>
            case 2: return <FcTodoList className={index, classValue}/>
            case 3: return <FaUserLock className={index, classValue}/>
            case 4: return <FaQuestionCircle className={index, classValue}/>
            case 5: return <FaUserCheck className={index, classValue}/>
        }

    }

    const iconSec3 = (index, classValue) => {

        switch (index) {
            case 0: return <FaUserEdit className={index, classValue}/>
            case 1: return <FaFileAlt className={index, classValue}/>
            case 2: return <RiFolderLockFill className={index, classValue}/>
        }

    }


    return (

        <Fragment>

            <Layout>
                <SubBarSite pageName={'Página inicial'} />
                {section1 &&
                    <div>
                        {
                            section1.map((section, index) => (
                                <div key={index}>
                                    <section className="border-b border-white " style={{
                                        backgroundImage: `url('/storage/post/${section.posts[0].featured}')`,
                                        backgroundPosition: 'right',
                                        backgroundColor: '#1E40AF',
                                        backgroundSize: '60%',
                                        backgroundRepeat: 'no-repeat'
                                    }}>

                                        <div className="container mx-auto">
                                            <div className="h-40 md:h-96 items-center lg:flex">
                                                <div className="h-full md:h-96 flex items-center justify-left w-full md:rounded-r-full bg-gradient-to-r from-blue-800 to-blue-700 lg:w-7/12">
                                                    <div className="max-w-lg lg:max-w-lg p-2">
                                                        <h1 className="md:text-2xl text-md font-semibold text-gray-200 uppercase dark:text-white lg:text-3xl">{section.categorytitle}</h1>
                                                        <p className="mt-2 md:text-xl text-sm text-gray-100 dark:text-gray-400">{section.descricao}</p>
                                                        {/* <button className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-800 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                                                            + Ver mais
                                                        </button> */}
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
                    <div className="bg-gray-200 px-4 md:px-8 lg:px-80 py-20 pt-2">
                        {section2.map((sec2, index2) => (
                            <div key={index2}>
                                <div className="py-8">
                                    <h1 className="text-3xl text-center text-gray-800 text-shadow">{sec2.categorytitle}</h1>
                                    <p className="text-xl text-center py-4 text-gray-700">{sec2.descricao}</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {sec2.sub_categories.map((post2, pIndex2) => (
                                        <div key={pIndex2}>
                                            <div className="p-0 h-full flex flex-col items-stretch shadow shadow bg-white transition duration-600 ease-in-out hover:shadow-lg hover:bg-white">
                                                <div className="flex justify-start">
                                                    <div className="p-4">
                                                        {iconSec2(pIndex2, "text-8xl text-blue-400")}
                                                    </div>
                                                    <div className="p-4">
                                                        <h1 className="mt-2 text-2xl uppercase text-blue-600">{post2.categorytitle}</h1>
                                                        <p className="text-gray-500 text-md">{post2.descricao}</p>
                                                    </div>
                                                </div>
                                                <div className="relative py-6 flex-grow">
                                                    <a className="absolute flex items-center bottom-3 right-4 text-sm font-semibold text-yellow-600 hover:text-yellow-500" href={route('categoria', post2.slug)}><span>Saiba mais</span><GoArrowSmallRight className="pt-1 text-4xl" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                        }
                    </div>
                }

                {section3 &&
                    <div className="bg-gray-100 px-4 md:px-8 lg:px-80 py-20 pt-2">
                        {section3.map((sec3, index3) => (
                            <div key={index3}>
                                <div className="py-8">
                                    <h1 className="text-3xl text-center text-gray-800 text-shadow">{sec3.categorytitle}</h1>
                                    <p className="text-xl text-center py-4 text-gray-700">{sec3.descricao}</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {sec3.posts.map((post3, pIndex3) => (
                                        <div key={pIndex3}>
                                            <div className="p-0 h-full flex flex-col items-stretch shadow bg-white transition duration-600 ease-in-out hover:shadow-lg hover:bg-white">

                                                <div className="pt-4 flex justify-center">
                                                    {iconSec3(pIndex3, "text-8xl text-blue-400")}
                                                </div>
                                                <div className=" ">
                                                    <h1 className="p-4 mt-2 text-center text-2xl uppercase text-blue-600">{post3.title}</h1>
                                                    <p className="p-4 text-gray-500 text-center text-md">{post3.summary}</p>
                                                </div>
                                                <div className="py-4 mb-0 flex flex-auto justify-end pr-4">
                                                    <a className="p-2 bg-yellow-600 hover:bg-yellow-700 shadow rounded-md self-end text-sm text-gray-100 hover:text-gray-200" href={route('postagem', post3.slug)}>+ Saiba mais</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                        }
                    </div>
                }

                {section4 &&
                    <div className="bg-gray-200 px-4 md:px-8 lg:px-80 py-20 pt-2">
                        {section4.map((sec4, index4) => (
                            <div key={index4}>
                                <div className="py-8">
                                    <h1 className="text-3xl uppercase text-center text-gray-800 text-shadow">{sec4.categorytitle}</h1>
                                    <p className="text-xl text-center py-4 text-gray-700">{sec4.descricao}</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {sec4.posts.map((post4, pIndex4) => (
                                        <div key={pIndex4}>
                                            <div className="h-full flex flex-col p-0 shadow bg-white transition duration-600 ease-in-out hover:shadow-lg hover:bg-white">
                                                <div className="pb-1 pr-0">
                                                    <img className="" src={"/storage/post/" + post4.featured } alt="" />
                                                </div>
                                                <h1 className="mt-2 text-2xl uppercase text-blue-600 text-center">{post4.title}</h1>
                                                <p className="text-center text-gray-500 text-md p-4">{post4.summary}</p>
                                                <div className="relative py-6 flex-grow">
                                                <a className="absolute flex items-center bottom-3 right-4 text-sm font-semibold text-yellow-600 hover:text-yellow-500" href={route('postagem', post4.slug)}><span>Saiba mais</span><GoArrowSmallRight className="pt-1 text-4xl" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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
