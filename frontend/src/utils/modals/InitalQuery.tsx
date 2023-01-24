import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const InitalQuery = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <div className='mt-60'>

                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="flex">
                            <div className='w-20'>
                                <button><ArrowBackIcon /></button>
                            </div>
                            <div className='w-60 text-center'>
                                <h1 className='font-bold'>What are you?</h1>
                            </div>
                            <div className='w-20'>
                                <button><ArrowForwardIcon /></button>
                            </div>
                        </div>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className="flex">
                                <div className="flex-inital w-52">
                                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                                        Pre Pregenent
                                    </button>
                                </div>
                                <div className="flex-inital w-48">
                                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                                        Pre Pregenent
                                    </button>
                                </div>
                            </div>

                            <button className='mt-4 ml-20 text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                                Pre Pregenent
                            </button>

                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default InitalQuery


// <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
//                                 Pre Pregenent
//                             </button>
//                             <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
//                                 Post Pregenent
//                             </button>
//                             <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
//                                 Generic User
//                             </button>