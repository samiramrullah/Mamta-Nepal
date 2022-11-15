import React from "react";
import img from '../assets/hero.png';
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
                                <a className="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-red-400 rounded shado md:w-auto md:mb-0 md:mr-4 hover:bg-red-600"
                                    href="#">
                                    Request a demo
                                </a>
                            </div>
                        </div>
                        <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0">
                            <div className="flex justify-center lg:justify-end">
                                <div className="mr-4 lg:mr-8">
                                    <img className="block  w-full h-32 mx-auto mb-8 rounded-md sm:h-64 object-contain"
                                        src="https://img.freepik.com/free-vector/detailed-dia-internacional-de-la-obstetricia-y-la-embarazada-illustration_23-2149008395.jpg?w=900&t=st=1668536355~exp=1668536955~hmac=5801cc16a97f873fa16b6c7bb4712d952e67e4d69b4feb8b0a49673a5d41fedc" alt="" />
                                    <img className="block  w-full h-32 mx-auto mb-8 rounded-md sm:h-64 object-contain"
                                        src="https://img.freepik.com/premium-vector/cute-mother-child-smiling-happily_642458-657.jpg?w=740" alt="" />
                                </div>
                                <div>
                                    <img className="block  w-full h-32 mx-auto mb-8 rounded-md sm:h-64 object-contain"
                                        src="https://i.pinimg.com/564x/75/f8/02/75f8025f1155b8be53677b0eb0e6012b.jpg
                                        " alt="" />
                                    <img className="block w-full h-32 mx-auto mb-8 rounded-md sm:h-64 object-contain"
                                        src={img} alt="" />
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
        </>
    );
}

export default Index;
