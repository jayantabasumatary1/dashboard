import React from 'react'
import { Box, Typography, } from "@mui/material"
import { createTheme, } from '@mui/material/styles';
import JobList from '../reqruiter/JobList';
import dasboardwall from "./dasboardwall.jpg"


const theme = createTheme()
const Employee = () => {
    return (
        <div className='emp-container'>
            <Box sx={{
                bgcolor: "black",
                color: 'white',
                padding: '4rem',
            }}>
                <Typography variant='h3'>
                    Job list available
                </Typography>
            </Box>
            <box>
                <JobList />

            </box>
            </div>
    )
}

export default Employee