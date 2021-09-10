import React, { Fragment } from 'react'
import Layout from '../../../components/site/layout'
import SubBarSite from '../../../components/site/subbar'
const pageSite = ({ page_content }) => {
    return (
        <Fragment>
            <Layout>
            <SubBarSite pageName={page_content.title}/>
                <section className="border-b border-white" style={{
                    backgroundImage: `url('/storage/page/${page_content.featured}')`,
                    backgroundPosition: 'right',
                    backgroundColor: '#F59E0B',
                    backgroundSize: '60%',
                    backgroundRepeat: 'no-repeat'
                }}>

                    <div className="container py-0 mx-auto">
                        <div className="h-40 md:h-96 items-center lg:flex">
                            <div className="h-full md:h-96  flex items-center justify-left w-full md:rounded-r-full bg-gradient-to-r from-yellow-500 to-yellow-400 lg:w-7/12">
                                <div className="max-w-lg lg:max-w-lg p-2 lg:max-w-lg">
                                    <h1 className="md:text-2xl text-md text-gray-200 uppercase dark:text-white lg:text-3xl">{page_content.title}</h1>
                                    <p className="mt-2 text-sm md:text-xl text-gray-100">{page_content.summary}</p>
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
                <section className="container mx-auto">
                    <div className="py-10">
                        <h1 className="py-8 text-3xl">{page_content.title}</h1>
                        <div>
                        <p dangerouslySetInnerHTML={{ __html: page_content.content }}/>
                        </div>
                    </div>

                </section>

            </Layout>
        </Fragment>
    )
}

export default pageSite
