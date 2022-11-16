import React from "react";
import { Link } from "react-router-dom";
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'
import hero4 from '../assets/hero4.png'
import Team from "../common/Team";
function Index() {
    return (
        <>
            <section className="h-full overflow-hidden md:mt-40 mt-6">
                <div className="container px-4 mx-auto mt-12">
                    <div className="flex flex-wrap items-center -mx-4">
                        {/* <div className="w-auto px-4 mb-4 text-center ">
                            <a className="hidden p-2 bg-blue-600 rounded-full dark:bg-blue-500 xl:mb-0 hover:bg-blue-700 lg:inline-block text-gray-50"
                                href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-4 h-4 bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                                    </path>
                                </svg>
                            </a>
                        </div> */}
                        <div className="w-full px-4 lg:w-2/5">
                            <div className=" lg:max-w-xl">
                                <h5 className="mb-2 text-4xl font-bold dark:text-gray-300 lg:text-6xl text-red-500">
                                    <span>Celebrating</span>
                                    {/* <span className=" " style={{ color: '#ff0532' }} >Develop</span> */}
                                </h5>
                                <h1 className="mb-6 text-6xl font-bold dark:text-gray-300 lg:text-6xl">
                                    {/* <span className=" " style={{ color: '#ff0532' }} >Develop</span> */}
                                    <span className=" text-red-600" >Motherhood</span>
                                </h1>
                                <p className="mb-6 leading-8 text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.sit amet, consectetur adipiscing elit, sed do Ut
                                    enim ad minim veniam
                                </p>
                                <Link className="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-red-400 rounded shado md:w-auto md:mb-0 md:mr-4 hover:bg-red-600"
                                    to={`/login/signup`}>
                                    Request a demo
                                </Link>
                            </div>
                        </div>
                        <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0">
                            <div className="flex justify-center lg:justify-end">
                                <div className="mr-4 lg:mr-8">
                                    <img className="block  w-full h-32 mx-auto mb-8 rounded-md sm:h-64 object-contain"
                                        src={hero1} alt="" />
                                    <img className="block  w-full h-32 mx-auto mb-8 rounded-md sm:h-64 object-contain"
                                        src={hero2} alt="" />
                                </div>
                                <div>
                                    <img className="block  w-full h-32 mx-auto mb-8 rounded-md sm:h-64 object-contain"
                                        src={hero3} alt="" />
                                    <img className="block w-full h-32 mx-auto mb-8 rounded-md sm:h-64 object-contain"
                                        src={hero4} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="w-auto px-4 mb-4 text-center xl:mb-0">
                            <a className="hidden p-2 bg-blue-600 rounded-full dark:bg-blue-500 hover:bg-blue-700 lg:inline-block text-gray-50"
                                href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                    </path>
                                </svg>
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>


            {/* Services start here */}

            <div className="overflow-y-hidden">
                <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
                    {/* Code block starts */}

                    <div className="pt-16">
                        <div className="py-12">
                            <div className="max-w-8xl mx-auto container">
                                <div tabIndex={0} aria-label="group of cards" className="focus:outline-none flex flex-wrap items-center justify-center sm:justify-between">
                                    <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4">
                                        <div className="w-20 h-20 relative ml-6">
                                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                            <div className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG1.svg" alt="drawer" />
                                            </div>
                                        </div>
                                        <h4 tabIndex={0} className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5">
                                            Ready to use<br />
                                            components
                                        </h4>
                                    </div>
                                    <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4">
                                        <div className="w-20 h-20 relative ml-6">
                                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                            <div className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG2.svg" alt="check" />
                                            </div>
                                        </div>
                                        <h4 tabIndex={0} className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5">
                                            Coded by Developers<br />
                                            for Developers
                                        </h4>
                                    </div>
                                    <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4">
                                        <div className="w-20 h-20 relative ml-6">
                                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                            <div className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG3.svg" alt="html tag" />
                                            </div>
                                        </div>
                                        <h4 tabIndex={0} className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5">
                                            Hight Quality UI<br />
                                            you can rely on
                                        </h4>
                                    </div>
                                    <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4">
                                        <div className="w-20 h-20 relative ml-6">
                                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                            <div className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG4.svg" alt="monitor" />
                                            </div>
                                        </div>
                                        <h4 tabIndex={0} className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5">
                                            The Last UI kit<br />
                                            you’ll ever need
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code block ends */}
                </div>
            </div>

            <Team/>
        </>
    );
}

export default Index;
