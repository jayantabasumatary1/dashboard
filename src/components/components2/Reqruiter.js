import React from 'react'
import { Close as CloseIcon } from '@mui/icons-material';
import { Box, Button, Dialog, DialogTitle, DialogContent, FilledInput, Grid, IconButton } from "@mui/material"
import { useState } from 'react';

const Reqruiter = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box sx={{
                bgcolor: "black",
                color: 'white',
                padding: '4rem',
            }}>
                <Button variant='outlined' onClick={handleClickOpen}>post a job </Button>
                <Dialog color='black' open={open} onClose={handleClose} fullWidth>
                    <DialogTitle><Box sx={{
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        Post Job
                        <IconButton >
                            <CloseIcon />
                        </IconButton>

                    </Box></DialogTitle>
                    <DialogContent>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <FilledInput placeholder='job title' />

                            </Grid>
                            <Grid item xs={6}>
                                <FilledInput placeholder='salary'>
                                </FilledInput>
                            </Grid>
                            <Grid item xs={6}>
                                <FilledInput placeholder='experience'>
                                </FilledInput>
                            </Grid>
                            <Grid item xs={6}>
                                <FilledInput placeholder='position'>
                                </FilledInput>
                            </Grid>
                            <Grid item xs={12}>
                                <FilledInput placeholder='Job Description' fullWidth multiline rows={4}>
                                </FilledInput>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <Box width="100%" display="flex">
                        <Button variant='contained'>
                            Post JOb</Button>

                    </Box>
                </Dialog>
            </Box>

        </div>
    )
}

export default Reqruiter