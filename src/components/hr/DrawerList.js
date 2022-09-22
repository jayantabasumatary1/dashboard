import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonTheme from './ButtonTheme';
import { styled, Divider,Stack ,List,ListItemText, ListItemButton, ListItemIcon, IconButton, ListSubheader, Typography, Box } from '@mui/material'; 
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


const DrawerList = () => {
  return (
    <Box>
        <ListSubheader sx={{
            bgcolor: "#0A1929",
            display: "flex",
            padding: "0.78rem 0 0.78rem 0.78rem",
            mb: 1,
            boxShadow:  "2px 2px 2px 1px rgba(0, 0, 0, 0.4)"
        }} >
            <Stack direction= "row" alignItems = "center" gap={1} flexGrow={1} >
            <IconButton sx={{
              color: "white"
            }}>
              <AccountCircleIcon fontSize='large' />
            </IconButton>
            <Typography variant='h6' color="white">Hello,</Typography>
            </Stack>               
  {/* 
  <Tooltip title="close Menu" arrow><IconButton
              sx={{
              mr: 1,
              color: "white"
            }}>
            <CloseIcon  fontSize='small'/>
            </IconButton>
            </Tooltip>  
  */}       
        </ListSubheader>
        <FireNav disablePadding sx={{ width: 300}} > 
        {
        iconData.map((item)=>(
            <ListItemButton
                key = {item.label}
                sx={{ py: 1.5, minHeight: 32,}}>
                    <ListItemIcon sx={{ color: 'black' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
        ))}
        <ListItemText primary="Preferences" sx={{
          paddingLeft: 4
        }}>
        </ListItemText>
        <Divider/>
        <ButtonTheme/>
      </FireNav>
      </Box>
  )
}

export default DrawerList;