import React from 'react'

const Profile = () => {
    return (
        <>
            <div className="w-full h-full relative md:mt-24 shadow-2xl rounded overflow-hidden">
                <div className="top h-80 w-full bg-blue-600 overflow-hidden relative" >
                    <img src="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/314727225_812840499931043_6494243062607539135_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=n8VL28Eq1aoAX8oD0Ia&_nc_ht=scontent.fdel29-1.fna&oh=00_AfCdjnHDPuY-pb-gioQHOi023soSjSWs1XmSY7oyeCgzEw&oe=637C54FA" alt="" className="bg w-full h-full object-cover object-center absolute z-0" />
                    <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                        <img src="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/314727225_812840499931043_6494243062607539135_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=n8VL28Eq1aoAX8oD0Ia&_nc_ht=scontent.fdel29-1.fna&oh=00_AfCdjnHDPuY-pb-gioQHOi023soSjSWs1XmSY7oyeCgzEw&oe=637C54FA" className="h-24 w-24 object-cover rounded-full" alt='zxcv' />
                        <h1 className="text-2xl font-semibold">Samir Alam</h1>
                        <h4 className="text-sm font-semibold">Joined Since '22</h4>
                    </div>
                </div>
                <div className="grid grid-cols-12 bg-white ">

                    <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">

                        <a href="fgh" className="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">Basic Information</a>

                        <a href="fgh" className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Another Information</a>

                        <a href="fgh" className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Another Something</a>

                    </div>

                    <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
                        <div className="px-4 pt-4">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile