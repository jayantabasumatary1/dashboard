import React from 'react'
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import {List, ListItem, ListItemAvatar, ListItemText,Drawer,Typography , IconButton,Toolbar,AppBar,Box,Avatar  } from '@mui/material';
import DrawerItems from './DrawerItems';
import JobPosts from './JobPosts';


const drawerWidth = 250;
const StyledIconButton = styled(IconButton)(({theme})=>({
    "&.MuiIconButton-root":{
        size: "large",
        edge:"start",
        color:"black",
        margin: theme.spacing(0,2,0,1),
        [theme.breakpoints.up('sm')]:{
            display: "none"

        }

    }
}))
const StyledDrawer = styled(Drawer)(({theme})=>({
    '& .MuiDrawer-root':{
      width: drawerWidth,
      flexShrink: 0,
      [theme.breakpoints.down("sm")]:{
        width : drawerWidth - 40,
      }
    },
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      [theme.breakpoints.down("sm")]:{
        width : drawerWidth - 50,
      }
    },
  
  }))
  const DrawerHeader =(
    <>
    <List disablePadding sx={{
        bgcolor:"#0A1929",
        height: {xs: "57px", sm: "64px" }
    }} >
        <ListItem  >
            <ListItemAvatar>
                <Avatar/>
            </ListItemAvatar>
            <ListItemText primary="Hello" sx={{color: "white",}} 
            primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium' }} ></ListItemText>
        </ListItem>
    </List>
    </>
  )

export const Appbar = () => {
    const [open , setOpen ] = useState(false);
    const handleDrawer = ()=>{
        setOpen(!open);
    }
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position= "sticky"  sx={{bgcolor: "white",width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }}}>
        <Toolbar>
          <StyledIconButton disableTouchRipple
            aria-label="open drawer"
            onClick={handleDrawer}
          >
            <MenuIcon />
          </StyledIconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: {  sm: 'block' }, fontWeight: 600 }}
            color="black"
          >
            Jobs for you
          </Typography>
        </Toolbar>
      </AppBar>
      <StyledDrawer
        BackdropProps={{ invisible: true }}
        variant= "temporary"
        onClose={()=>setOpen(false)}
        anchor="left"
        open={open}
        sx={{display: { xs: 'block', sm: 'none' }}}
        >
            {DrawerHeader}
            <DrawerItems/>
        </StyledDrawer>
        <StyledDrawer
         BackdropProps={{ invisible: true }}
         variant= "permanent"
         sx={{
            display: { xs: 'none', sm: 'block' }
         }}
         open
        >
            {DrawerHeader}
            <DrawerItems/>
        </StyledDrawer>
    </Box>
  );
}

