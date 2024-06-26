import React from 'react'
import sidelowerimg from '../assets/contactImg.png'
const Contact = () => {
    return (
        <>
            <section className="flex items-center xl:h-screen font-poppins ">
                <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
                    <h2 className="pb-2 text-xl font-bold text-center md:text-3xl">
                        Let's Connect
                    </h2>
                    <div className="w-20 mx-auto mb-6 border-b border-red-700 dark:border-gray-300"></div>
                    <div className="flex flex-wrap px-4 py-8 rounded-md shadow">
                        <div className="w-full px-4 mb-6 lg:w-2/5 lg:mb-0">
                            <div className="relative h-full p-8 rounded-md bg-gradient-to-r  text-black">
                                <div className="absolute pt-10 bottom-0 right-0 items-center justify-center hidden lg:inline-flex">
                                    <img src={sidelowerimg} alt='img'></img>
                                </div>
                                <h2 className="mb-4 text-3xl font-bold text-black">Contact Information</h2>
                                <p className="mb-8 text-sm font-medium text-black">Lorem ipsum dor amet set
                                    ispicius</p>
                                <div className="flex mb-8 text-black md:items-center dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-6 h-6 text-black dark:text-gray-400 bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z">
                                        </path>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                    </svg>
                                    <div
                                        className="max-w-xl ml-2 text-lg font-semibold tracking-wide text-black">
                                        Sector -12, Chandigarh , India
                                    </div>
                                </div>
                                <div className="flex mb-8 text-black md:items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 text-black bi bi-telephone" viewBox="0 0 16 16">
                                        <path
                                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                    <div
                                        className="max-w-xl ml-2 text-lg font-semibold tracking-wide text-black">
                                        +91-9041952237
                                    </div>
                                </div>
                                <div className="flex text-black md:items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 text-black bi bi-envelope-open "
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                                    </svg>
                                    <div
                                        className="max-w-xl ml-2 text-lg font-semibold tracking-wide text-black ">
                                        samiramrullah@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-6 lg:mb-0 lg:w-3/5">
                            <form action="">
                                <div className="flex flex-wrap mb-6 -mx-3">
                                    <div className="w-full px-3">
                                        <label
                                            className="block mb-2 font-bold tracking-wide text-gray-700 uppercase dark:text-gray-400">
                                            Name
                                        </label>
                                        <input
                                            className="w-full p-4 mr-3 text-sm leading-tight text-gray-700 bg-transparent border-b border-gray-300 appearance-none dark:border-gray-600 focus:outline-none dark:focus:bg-gray-800 dark:text-gray-400 focus:bg-gray-100"
                                            type="text" placeholder="Your full name...." />
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-6 -mx-3">
                                    <div className="w-full px-3">
                                        <label
                                            className="block mb-2 font-bold tracking-wide text-gray-700 uppercase dark:text-gray-400">
                                            Subject
                                        </label>
                                        <input
                                            className="w-full p-4 mr-3 text-sm leading-tight text-gray-700 bg-transparent border-b border-gray-300 appearance-none dark:border-gray-600 dark:focus:bg-gray-800 dark:text-gray-400 focus:outline-none focus:bg-gray-100"
                                            type="text" placeholder="I'm asking for...." />
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-6 -mx-3">
                                    <div className="w-full px-3">
                                        <label
                                            className="block mb-2 font-bold tracking-wide text-gray-700 uppercase dark:text-gray-400">
                                            Email Address
                                        </label>
                                        <input
                                            className="w-full p-4 mr-3 text-sm leading-tight text-gray-700 bg-transparent border-b border-gray-300 appearance-none dark:border-gray-600 dark:focus:bg-gray-800 dark:text-gray-400 focus:outline-none focus:bg-gray-100"
                                            type="email" placeholder="abc@gmail.com" />
                                    </div>
                                </div>
                                <div className="w-full px-3 mb-6 -mx-3">
                                    <label
                                        className="block mb-2 font-bold tracking-wide text-gray-700 uppercase dark:text-gray-400">
                                        Your Message
                                    </label>
                                    <textarea rows={4} placeholder="Write a message..." required
                                        className="w-full p-4 mr-3 text-sm leading-tight text-gray-700 bg-transparent border-b border-gray-300 appearance-none dark:focus:bg-gray-800 dark:border-gray-600 dark:text-gray-400 focus:outline-none focus:bg-gray-100"></textarea>
                                </div>
                                <div className="px-2">
                                    <button
                                        className="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded-md shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact