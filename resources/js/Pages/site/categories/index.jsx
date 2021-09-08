import { InertiaLink, Head } from '@inertiajs/inertia-react'
import route from 'ziggy'
import React, { Fragment } from 'react'
import { HiLightBulb } from 'react-icons/hi'
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
                                        <section className="h-auto border-b border-white" style={{
                                            backgroundImage: `url('/storage/post/${category.posts[0].featured}')`,
                                            backgroundPosition: 'right',
                                            backgroundColor: '#F59E0B',
                                            backgroundSize: '60%',
                                            backgroundRepeat: 'no-repeat'
                                        }}>

                                            <div className="container py-0 mx-auto">
                                                <div className="items-center lg:flex">
                                                    <div className="h-96 flex items-center justify-left w-full rounded-r-full bg-gradient-to-r from-yellow-500 to-yellow-400 lg:w-7/12">
                                                        <div className="lg:max-w-lg">
                                                            <h1 className="text-2xl font-semibold text-gray-200 uppercase dark:text-white lg:text-3xl">{category.categorytitle}</h1>
                                                            <p className="mt-2 text-gray-500 dark:text-gray-400">{category.descricao}</p>
                                                        </div>
                                                    </div>
                                                    <div className="h-96 flex items-center justify-rigth w-full mt-6 lg:mt-0 lg:w-5/12">
                                                        {/* <img className="w-full h-80 rounded-l-full" src={"/storage/post/" + category.posts[0].featured} alt="" /> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </section>


                                        {category.posts.map((post, pIndex) => (
                                            <section key={pIndex} className="mx-auto container">
                                                {post.type == 1 &&
                                                    <div className="py-4">
                                                        <h1 className="py-4">{post.title}</h1>
                                                        <InertiaLink
                                                        href={route('postagem', post.slug)}
                                                        >
                                                            IR
                                                            </InertiaLink>
                                                        <p className="py-4">{post.summary}</p>
                                                    </div>
                                                }
                                            </section>
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