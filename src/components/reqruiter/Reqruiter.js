import React from 'react'
import { Close as CloseIcon } from '@mui/icons-material';
import { Box, Button, Dialog, DialogTitle, DialogContent, FilledInput, Grid, IconButton, DialogActions, Typography } from "@mui/material"
import { useState } from 'react';

const Reqruiter = () => {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({
        name: "",
        salary: "",
        position: "",

    })
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }
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
                padding: '2rem',
            }}><Grid container justifyContent="center">
            <Grid item xs = {10}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                <Typography variant='h4'>List of Jobs </Typography>
                <Button className='btn' variant='contained'   onClick={handleClickOpen}>post a job </Button></Box>
                </Grid>
                </Grid>
                <Dialog open={open} onClose={handleClose} fullWidth>
                    <DialogTitle><Box sx={{
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        Post a New Job
                        <IconButton>
                            <CloseIcon />
                        </IconButton>

                    </Box></DialogTitle>

                    <DialogContent>
                        <form id="myform">

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <FilledInput name='title' placeholder='job title' value={user.title} onChange={handleInputs} />

                                </Grid>
                                <Grid item xs={6}>
                                    <FilledInput name='salary' placeholder='salary' value={user.salary} onChange={handleInputs}>
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
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button variant='contained' onClick={() => setOpen(false)}>
                                    cancel</Button>

                            </Grid>
                            <Grid item xs={6}>
                                <Button variant='contained'>
                                    submit</Button>

                            </Grid> </Grid>
                    </DialogActions>
                </Dialog>
            </Box >

        </div >
    )
}

export default Reqruiter