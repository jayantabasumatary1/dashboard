import React from 'react'
import { Box, } from '@mui/system'
import { AppBar,  createTheme,  ThemeProvider,  Typography, Stack } from '@mui/material'
import { Drawericon } from './Drawer';
import SearchBar from './SearchBar';
const theme = createTheme();

theme.typography.h4={
  fontSize: '2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}

const Navbar = () => {
  return (
    <AppBar position="sticky"
      sx={{
      background: "white", 
      
    }}>
      <Box sx={{
        display: 'flex',
        padding: "1rem 2rem 1rem 2rem",
        boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.4)",
        height: '70px'
      }
      }>
        <Stack direction="row" gap={1} flexGrow={1} alignItems="center" >
        <Drawericon/>
        <ThemeProvider theme={theme}>
        <Typography variant='h4' color="black" fontWeight={80}
        sx={{ flexGrow: 1, }}>
        List of available jobs
        </Typography> 
        </ThemeProvider>  
        <SearchBar/>
           </Stack>
           
      </Box>
    </AppBar>
  )
}

export default Navbar