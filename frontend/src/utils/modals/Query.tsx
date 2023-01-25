import React from 'react'
import { useState } from 'react';
import { userType } from '../Helper/userType';
import BasicQuery from './BasicQuery';
import DetailQuery from './DetailQuery';
const Query = () => {
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const [currentUserType, setCurrentUserType] = useState<String>("")
    // const style = {
    //     position: 'absolute' as 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 400,
    //     bgcolor: 'background.paper',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    // };

    const userTypeHandler = (value: String) => {
        setCurrentUserType(value);
    }
    if (currentUserType === userType.postpregnant) {
        return (
            <div className="mt-60">
                <DetailQuery />
            </div>

        )
    }
    else if (currentUserType === userType.prepregnant) {
        return (
            <div className="mt-60">
                <DetailQuery />
            </div>

        )
    }
    else {
        return (
            <div className='mt-60'>
                <BasicQuery userTypeHandler={userTypeHandler} />
            </div>
        )
    }

}

export default Query
