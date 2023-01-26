import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import { useState } from "react";

const BackdropWrapper = ({children}:any) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(true);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Button onClick={handleToggle}>Show backdrop</Button>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <h1>I am testing </h1>
            </Backdrop>
        </div>
    );
}
export default BackdropWrapper
