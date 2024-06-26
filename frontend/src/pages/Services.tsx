import React from 'react'

const Services = () => {
    return (
        <>
            <section className="flex items-center justify-center">
                <div className="px-4  mt-20 lg:py-20 max-w-7xl">
                    <div className="max-w-xl mx-auto">
                        <h1 className="mb-4 text-4xl font-bold text-center dark:text-white"> Our Features </h1>
                        <p className="mb-16 text-base text-center text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni eius eaque? Pariatur
                            numquam, odio quod nobis ipsum ex cupiditate?
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                            <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    className="text-white" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold dark:text-white"> Automatic Power Shields </h3>
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
                                iure minus sed fugit obcaecati minima quam reiciendis dicta!
                            </p>
                        </div>
                        <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                            <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    className="text-white" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                    <path
                                        d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold dark:text-white"> Self Fixing Cogs </h3>
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
                                iure minus sed fugit obcaecati minima quam reiciendis dicta!
                            </p>
                        </div>
                        <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                            <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    className="text-white" viewBox="0 0 16 16">
                                    <path
                                        d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                    <path
                                        d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold dark:text-white"> Auto Mail Correction </h3>
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
                                iure minus sed fugit obcaecati minima quam reiciendis dicta!
                            </p>
                        </div>
                        <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                            <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    className="text-white" viewBox="0 0 16 16">
                                    <path
                                        d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold dark:text-white"> Secured Multiple Files </h3>
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
                                iure minus sed fugit obcaecati minima quam reiciendis dicta!
                            </p>
                        </div>
                        <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                            <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    className="text-white" viewBox="0 0 16 16">
                                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                                    <path
                                        d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold dark:text-white"> Time Protection </h3>
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
                                iure minus sed fugit obcaecati minima quam reiciendis dicta!
                            </p>
                        </div>
                        <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                            <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    className="text-white" viewBox="0 0 16 16">
                                    <path
                                        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold dark:text-white"> Lighting Fast Speeds </h3>
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
                                iure minus sed fugit obcaecati minima quam reiciendis dicta!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services