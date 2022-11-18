import React from 'react'
import BasicInfo from './BasicInfo'
import { useState } from 'react'
import AdditionalInfo from './AdditionalInfo';
const Profile = () => {
    const [showBasicInfo,setShowBasicInfo]=useState(true);
    const [showAdditionalIndo,setshowAdditionalInfo]=useState(false);
    const showBasicInfoHandler=()=>{
        setshowAdditionalInfo(false);
        setShowBasicInfo(true);
    }
    const showAdditionalIndoHandler=()=>{
        setShowBasicInfo(false);
        setshowAdditionalInfo(true);
    }
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

                        <div onClick={showBasicInfoHandler} className="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">Basic Information</div>

                        <div onClick={showAdditionalIndoHandler} className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Another Information</div>

                        <div className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Another Something</div>

                    </div>

                    <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
                        <div className="px-4 pt-4">
                           {showBasicInfo &&<BasicInfo/>}
                           {showAdditionalIndo && <AdditionalInfo/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile