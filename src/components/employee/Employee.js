import React from 'react'
import { Box, Button, Typography, } from "@mui/material"
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Header from './Header';

const Employee = () => {
    return (
        <div>
            <Box  style={{
                colorScheme: "dark"
            }} sx={{
                bgcolor: "#0A1929",
                height: '100vh',
                minHeight  : '100vh',
            
            }}>
                <Header/>
            </Box>
        </div>
    )
}

export default Employee