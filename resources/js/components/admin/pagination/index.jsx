import { InertiaLink } from '@inertiajs/inertia-react'
import React, { Fragment } from 'react'

const Pagination = ({ data }) => {
    return (
        <Fragment>
            {/* flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600 */}
            <div class="flex">
                {data.prev_page_url &&
                    <InertiaLink
                        href={data.prev_page_url}
                        class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200">
                        previous
                    </InertiaLink>
                }

                {data.links.map((link, index) => (
                    <InertiaLink
                    key={index}
                        href={link.url}
                        class={
                            link.active ?
                            "flex items-center px-4 py-2 mx-1 bg-indigo-600 text-white transition-colors duration-200 transform rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
                            :
                            "flex items-center px-4 py-2 mx-1 bg-white text-gray-700 transition-colors duration-200 transform rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
                        }>
                        {link.label}
                    </InertiaLink>
                ))}

                {data.next_page_url &&
                    <InertiaLink
                        href={data.next_page_url}
                        class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200">
                        Next
                    </InertiaLink>
                }
            </div>

        </Fragment>
    )
}

export default Pagination
