import React from 'react'

const BasicInfo = () => {
    return (
        <>
            <form action="fgh" className="flex flex-col space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold">Basic Information</h3>
                    <hr />
                </div>

                <div className="form-item">
                    <label className="text-xl ">Full Name</label>
                    <input type="text" value="Samir Alam" className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled />
                </div>

                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                    <div className="form-item w-full">
                        <label className="text-xl ">Username</label>
                        <input type="text" value="alamsamir" className="w-full appearance-none text-black  rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                    </div>

                    <div className="form-item w-full">
                        <label className="text-xl ">Email</label>
                        <input type="text" value="samiramrullah@gmail.com" className="w-full appearance-none text-black  rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold ">More About Me</h3>
                    <hr />
                </div>

                <div className="form-item w-full">
                    <label className="text-xl ">Biography</label>
                    <textarea className="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!</textarea>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold">My Social Media</h3>
                    <hr />
                </div>

                <div className="form-item">
                    <label className="text-xl ">Instagram</label>
                    <input type="text" value="https://instagram.com/" className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                </div>
                <div className="form-item">
                    <label className="text-xl ">Facebook</label>
                    <input type="text" value="https://facebook.com/" className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                </div>
                <div className="form-item">
                    <label className="text-xl ">Twitter</label>
                    <input type="text" value="https://twitter.com/" className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " disabled />
                </div>
                <div className="form-item">
                    <label className="text-xl ">Twitter</label>
                    <input type="text" value="https://twitter.com/" className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " disabled />
                </div>

            </form>
        </>
    )
}

export default BasicInfo