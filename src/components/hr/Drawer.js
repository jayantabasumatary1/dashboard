import React from 'react'
import { Box} from '@mui/system'
import { IconButton, Tooltip, Drawer,} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import {Fab} from '@mui/material';
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
    <div>
    <Tooltip title="Open Menu" arrow>
    <IconButton sx={{ mr: 2 }} onClick={openDrawer}>
        <MenuIcon/>
      </IconButton>
    </Tooltip>
    <Drawer
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
    </div>
  )
}
