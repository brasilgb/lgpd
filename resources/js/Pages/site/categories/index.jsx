import { InertiaLink, Head } from '@inertiajs/inertia-react'
import route from 'ziggy'
import React, { Fragment } from 'react'
import { HiLightBulb } from 'react-icons/hi'
import {GoArrowSmallRight} from 'react-icons/go'
import Layout from '../../../components/site/layout'
import SubBarSite from '../../../components/site/subbar'

const categorySite = ({ categories_posts }) => {

    return (
        <Fragment>

            <Layout>
                <Head title={categories_posts[0].categoryname} />

                <div className="w-full">
                    <SubBarSite pageName={categories_posts[0].categoryname} />
                    <div>
                        {categories_posts.map((category, index) => (

                            <div key={index}>
                                {category.posts.length > 0 ?
                                    <div>
                                        <section className="border-b border-white" style={{
                                            backgroundImage: `url('/storage/post/${category.posts[0].featured}')`,
                                            backgroundPosition: 'right',
                                            backgroundColor: '#F59E0B',
                                            backgroundSize: '60%',
                                            backgroundRepeat: 'no-repeat'
                                        }}>

                                            <div className="container py-0 mx-auto">
                                                <div className="h-40 md:h-96 items-center lg:flex">
                                                    <div className="h-full md:h-96  flex items-center justify-left w-full md:rounded-r-full bg-gradient-to-r from-yellow-500 to-yellow-400 lg:w-7/12">
                                                        <div className="max-w-lg lg:max-w-lg p-2">
                                                            <h1 className="md:text-2xl text-md font-semibold text-gray-200 uppercase dark:text-white lg:text-3xl">{category.categorytitle}</h1>
                                                            <p className="mt-2 md:text-xl text-sm text-gray-100 dark:text-gray-400">{category.descricao}</p>
                                                        </div>
                                                    </div>
                                                    <div className="h-96 flex items-center justify-rigth w-full mt-6 lg:mt-0 lg:w-5/12">
                                                        {/* <img className="w-full h-80 rounded-l-full" src={"/storage/post/" + category.posts[0].featured} alt="" /> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </section>

                                        {category.posts.map((post, pIndex) => (
                                            <div key={pIndex}>
                                                {post.type == 1 &&
                                                    <section className="mx-auto container px-4 py-2 my-4 bg-gray-100 rounded border border-white">

                                                        <h1 className="py-4 text-lg md:text-xl uppercase font-semibold text-blue-700">{post.title}</h1>
                                                        <p className="py-4 text-sm md:text-lg text-gray-700">{post.summary}</p>
                                                        <div className="mb-0 pt-1 flex flex-auto items-center justify-end border-t border-gray-200">
                                                            <InertiaLink
                                                                href={route('postagem', post.slug)}
                                                                className="flex items-center text-sm font-semibold text-yellow-600 hover:text-yellow-500"
                                                            >
                                                               <span>Saiba mais</span><GoArrowSmallRight className="pt-1 text-4xl" />
                                                            </InertiaLink>
                                                        </div>
                                                    </section>
                                                }
                                            </div>
                                        ))}

                                    </div>
                                    :
                                    <div className="container flex justify-center mx-auto rounded-lg mt-10 p-10 bg-yellow-200 border border-red-300">
                                        <HiLightBulb className="text-2xl text-red-500" /> <p className="text-lg text-red-500">Não há dados a serem mostrados para esta categoria!!</p>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>

        </Fragment>

    )
}

export default categorySite
