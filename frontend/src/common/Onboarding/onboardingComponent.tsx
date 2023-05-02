import { Modal } from '@material-ui/core'
import React from 'react'

const onboardingComponent = () => {
    return (
        <Modal open={true} className="bg-white m-auto h-2/3 w-2/3">
        <div className="flex justify-center items-center h-100% sm:h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-6">
            <div className="p-4 sm:p-0 max-w-sm h-1/4 sm:max-h-full cursor-pointer sm:bg-gray-400 sm:filter sm:grayscale hover:filter-none  border-gray-200 rounded-lg shadow transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-inherit duration-300">
                    <a href="1" className="group relative block">
                        <img
                            alt="Developer"
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover rounded"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                Developer
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                        perferendis hic asperiores quibusdam quidem voluptates doloremque
                                        reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="p-4 sm:p-0 max-w-sm h-1/4 sm:max-h-full cursor-pointer sm:bg-gray-400 sm:filter sm:grayscale hover:filter-none  border-gray-200 rounded-lg shadow transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-inherit duration-300">
                    <a href="1" className="group relative block">
                        <img
                            alt="Developer"
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover rounded"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                Developer
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                        perferendis hic asperiores quibusdam quidem voluptates doloremque
                                        reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </Modal>
    )
}

export default onboardingComponent
