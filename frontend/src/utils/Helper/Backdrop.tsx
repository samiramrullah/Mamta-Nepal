import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
// import { userType } from "./userType";


const BackdropWrapper = ({ children, currentuserType }: any) => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        if (currentuserType) {
            setOpen(false)
        }
    };

    return (
        <div>
           
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 5 }}
                open={open}
                onClick={handleClose}
            >
                {children}
            </Backdrop>
        </div>
    );
}
export default BackdropWrapper
