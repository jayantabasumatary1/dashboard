import React, { useContext } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LogoutIcon from '@mui/icons-material/Logout';
import { CssBaseline, Divider, List,ListItemButton, ListItemIcon, ListItemText, ThemeProvider } from '@mui/material';
import styled from 'styled-components';
import { useState } from 'react';
import {createTheme} from '@mui/material';
import ModeSwitch from './ModeSwitch';
const iconData = [
    {icon: <HomeIcon/>, label: "Home", index: 0},
    {icon: <DashboardCustomizeIcon/>, label: "Dashboard", index: 1},
    {icon: <SettingsIcon/>, label:"Settings", index:2 },
    {icon: <LogoutIcon/>, label: "Log Out", index: 3 },
];
const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
      paddingLeft: 24,
      paddingRight: 24,
      
    },
    '&, & .MuiListItemIcon-root': {
      minWidth: 2,
      marginRight: 16,
      color: "#0A1929"
    },
    '& .MuiSvgIcon-root': {
      fontSize:30,
      
    },
    '& .MuiListItemText-root':{
        color: "black",
    },
  });

  

  const theme = createTheme({
    components: {
      MuiListItemButton:{
        defaultProps:{
          disableTouchRipple : true,
        },  
      }
    },
  });
const DrawerItems = () => {
  const [selectedIndex, setSelectedIndex]=useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <ThemeProvider theme = {theme}> 
       <CssBaseline/>
         <FireNav disablePadding sx={{ width:{xs: 200, sm: 250 } }} > 
        {
        iconData.map((item)=>(
            <ListItemButton
                key = {item.label}
                selected={selectedIndex === `${item.index}`}
                onClick={(event) => handleListItemClick(event, `${item.index}`)}
                sx={{ py: 1.5, minHeight: 32}}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 16, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
        ))}
        <ListItemText primary="Preferences" sx={{
          paddingLeft: 3
        }}>
        </ListItemText>
        <Divider />
        <ModeSwitch/>
        
      </FireNav>
      
      </ThemeProvider>
  )
}

export default DrawerItems