import React from 'react'
import { IconButton, Tooltip, Drawer, createTheme,} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import DrawerList from './DrawerList';
import { useState } from 'react';
const drawerWidth = 300;
export const Drawericon = () => {

    const [open , setOpen ] = useState(false);
    const openDrawer = ()=>{
        setOpen(true);
    } 
  return (
    <>
    <Tooltip title="Open Menu" arrow>
    <IconButton sx={{ mr: 2 }} onClick={openDrawer}>
        <MenuIcon/>
      </IconButton>
    </Tooltip>
    <Drawer
    BackdropProps={{ invisible: true }}
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        boxSizing: "border-box"
      },
    }} 
        onClose={()=>setOpen(false)}
        variant="temporary"
        anchor="left"
        open={open}
         >
          <DrawerList/>  
          </Drawer>
    </>
  )
}
