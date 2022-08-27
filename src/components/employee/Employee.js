import React from 'react'
import { Box, Typography, } from "@mui/material"
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material';

const dtheme = createTheme({
    typography:{
    },
    palette: {
        mode: 'dark',
    },
});
const Employee = () => {
    return (
        <ThemeProvider theme={dtheme}>
        
        <div>
            <Box  style={{
                colorScheme: "dark"
            }} sx={{
                bgcolor: "#0A1929",
                height: '100vh',
                minHeight  : '100vh',
            
            }}>
                <Box  sx={{
                    color: "white",
                    bgcolor: "black",
                    padding: "2rem",
                    opacity: 0.5
                }}>
                <Typography variant='h3'>JOB LIST AVAILABLE</Typography>     
                </Box>
                <Box>

                </Box>
            </Box>
        </div>
        </ThemeProvider>
    )
}

export default Employee