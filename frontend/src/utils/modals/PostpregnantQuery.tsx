import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const PostpregnantQuery = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);

    return (
        <>
            <Box
                sx={{
                    height: 300,
                    flexGrow: 1,
                    minWidth: 300,
                    transform: "translateZ(0)",
                    // The position fixed scoping doesn't work in IE11.
                    // Disable this demo to preserve the others.
                    "@media all and (-ms-high-contrast: none)": {
                        display: "none"
                    }
                }}
                ref={rootRef}
            >
                <Modal
                    disablePortal
                    disableEnforceFocus
                    disableAutoFocus
                    open
                    aria-labelledby="server-modal-title"
                    aria-describedby="server-modal-description"
                    sx={{
                        display: "flex",
                        p: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    container={() => rootRef.current}
                >
                    <Box

                        sx={{
                            position: "relative",
                            width: '25%',
                            bgcolor: "background.paper",
                            border: "2px solid #000",
                            boxShadow: (theme) => theme.shadows[5],
                            height: '100%',
                            p: 4
                        }}
                    >
                        {/* <Typography id="server-modal-title" variant="h6" component="h2">
                            Server-side modal
                        </Typography>
                        <Typography id="server-modal-description" sx={{ pt: 2 }}>
                            If you disable JavaScript, you will still see me.
                        </Typography> */}
                        <FormControl>
                            <div className="flex">
                                <div>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Is this your first child?</FormLabel>
                                </div>
                                <div>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </div>
                            </div>
                        </FormControl>
                    </Box>
                </Modal>
            </Box>
        </>
    )
}

export default PostpregnantQuery