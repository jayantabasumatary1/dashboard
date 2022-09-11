import React from 'react'
import { Box, } from '@mui/system'
import { AppBar,  Typography } from '@mui/material'
import { Drawericon } from './Drawer';

const Navbar = () => {
  return (
    <AppBar position="sticky"
      sx={{
      background: "white",
    }}>
      <Box sx={{
        display: 'flex',
        padding: "1rem 0 1rem 2rem",
        boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.4)",
      }
      }>
        <Drawericon/>
        <Typography variant='h4' color="black" 
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
        List of available jobs
        </Typography>    
      </Box>
    </AppBar>
  )
}

export default Navbar