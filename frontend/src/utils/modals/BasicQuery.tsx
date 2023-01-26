import React from 'react'
import BackdropWrapper from '../Helper/Backdrop'
import { userType } from '../Helper/userType'
import { useState } from 'react'
const BasicQuery = () => {
    const [currentuserType, setCurrentUserType] = useState<string>("")
    // console.log(currentuserType,"currentuserTypecurrentuserTypecurrentuserTypecurrentuserType");
    
    return (
        <div className="mt-60">
            <BackdropWrapper currentuserType={currentuserType}>
                <div className="flex">
                    <div className="flex-inital w-52">
                        <button onClick={() => setCurrentUserType(userType.prepregnant)} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                            Pre Pregenent
                        </button>
                    </div>
                    <div className="flex-inital w-48">
                        <button onClick={() => setCurrentUserType(userType.postpregnant)} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                            Post Pregenent
                        </button>
                    </div>
                </div>
                <button onClick={() => setCurrentUserType(userType.genericUser)} className='mt-4 ml-20 text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                    Generic User
                </button>
            </BackdropWrapper>
        </div>
    )
}

export default BasicQuery