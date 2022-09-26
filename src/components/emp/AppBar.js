import React from 'react'
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import {List, ListItem, ListItemAvatar, ListItemText,  } from '@mui/material';
import DrawerItems from './DrawerItems';
import { Drawer } from '@mui/material';
import JobPosts from './JobPosts';
import { drawerWidthRight } from './DrawerRight';

const drawerWidth = 250;
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: 'rgba(127, 179, 224, 0.5)',
  marginLeft: 0,
  marginRight: theme.spacing(2),
  width: '100%',
  height: "32px",
  boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.4)",
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: "black"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  height: "32px",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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
        <ListItem>
            <ListItemAvatar>
                <Avatar/>
            </ListItemAvatar>
            <ListItemText primary="Hello" sx={{color: "white",}} ></ListItemText>
        </ListItem>
    </List>
    </>
  )

const Appbar = () => {
    const [open , setOpen ] = useState(false);
    const handleDrawer = ()=>{
        setOpen(!open);
    }
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position= "sticky"  sx={{bgcolor: "white",width: { sm: `calc(100% - ${drawerWidth+ drawerWidthRight}px)` },
          ml: { sm: `${drawerWidth}px` }, mr: {sm: `${drawerWidthRight}px`  } }}>
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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 600 }}
            color="black"
          >
            Jobs for you
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'rgba(127, 179, 224, 1)' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
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
        <JobPosts/>
    </Box>
  );
}
export default Appbar

