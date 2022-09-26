import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, List,ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import styled from 'styled-components';
import {Switch} from '@mui/material';
import {Box} from '@mui/material';
const iconData = [
    {icon: <HomeIcon/>, label: "Home"},
    {icon: <DashboardCustomizeIcon/>, label: "Dashboard"},
    {icon: <SettingsIcon/>, label:"Settings" },
    {icon: <LogoutIcon/>, label: "Log Out" },
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

const DrawerItems = () => {
  return (
    <div>
       
         <FireNav disablePadding sx={{ width:{xs: 200, sm: 250 } }} > 
        {
        iconData.map((item)=>(
            <ListItemButton
                key = {item.label}
                sx={{ py: 1.5, minHeight: 32,}}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
        ))}
        <ListItemText primary="Preferences" sx={{
          paddingLeft: 3
        }}>
        </ListItemText>
        <Divider/>
        <Box sx={{paddingLeft: 2 }}  >
        <Switch/>
        </Box>
      </FireNav>
      
    </div>
  )
}

export default DrawerItems