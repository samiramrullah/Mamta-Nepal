import React from 'react'

const Features = () => {
    return (
        <>
            <section className="flex pt-10 font-poppins dark:bg-gray-800 md:pl-72">
                <div className="justify-center flex-1 max-w-7xl px-4 py-4  lg:py-6 ">
                    <div className="flex flex-wrap  justify-center -mx-4">
                        <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
                            <div className="h-full p-6 text-center transition duration-200 rounded-md shadow bg-gray-50 hover:bg-white dark:bg-gray-900 hover:shadow-xl">
                                <div
                                    className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6  rounded-lg dark:bg-gray-600 dark:text-gray-400 text-gray-50">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1474/1474494.png' alt='img' className='fill-current' />
                                </div>
                                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl dark:text-gray-400">Community</h2>
                                <p className="font-medium text-gray-600 dark:text-gray-500">Lorem ipsum dor amet is a dummy text
                                    .Lorem ipsum dor amet
                                    isopinus ipaino cumberisus</p>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
                            <div className="h-full p-6 text-center transition duration-200 rounded-md shadow bg-gray-50 hover:bg-white dark:bg-gray-900 hover:shadow-xl">
                                <div
                                    className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6  rounded-lg dark:bg-gray-600 dark:text-gray-400 text-gray-50">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1835/1835079.png' alt='img' className='fill-current' />
                                </div>
                                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl dark:text-gray-400">Consult to doctor</h2>
                                <p className="font-medium text-gray-600 dark:text-gray-500">Lorem ipsum dor amet is a dummy text
                                    .Lorem ipsum dor amet
                                    isopinus ipaino cumberisus</p>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
                            <div className="h-full p-6 text-center transition duration-200 rounded-md shadow bg-gray-50 hover:bg-white dark:bg-gray-900 hover:shadow-xl">
                                <div
                                    className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6  rounded-lg dark:bg-gray-600 dark:text-gray-400 text-gray-50">
                                    <img src='https://cdn-icons-png.flaticon.com/512/2436/2436882.png' alt='img' className='fill-current' />
                                </div>
                                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl dark:text-gray-400">Resources</h2>
                                <p className="font-medium text-gray-600 dark:text-gray-500">Lorem ipsum dor amet is a dummy text
                                    .Lorem ipsum dor amet
                                    isopinus ipaino cumberisus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features