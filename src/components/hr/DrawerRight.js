import React from 'react'
import { Avatar, Drawer,List, ListItem, ListItemAvatar, ListItemText, styled } from '@mui/material'
export const drawerWidth = 500

const StyledDrawer = styled(Drawer)(({theme})=>({
  '& .MuiDrawer-root':{
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down("lg")]:{
      width: 0
    }
  },
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    [theme.breakpoints.down("lg")]:{
      display: 'none'
    }
  },

}))


const DrawerRight = (props) => {
  return (
    <div>
        <StyledDrawer
    variant="permanent"
    anchor="right"
    open= "true"
  > <List>
    <ListItem>
      <ListItemText primary="full"></ListItemText>
      <ListItemAvatar>
        <Avatar src={props.data}></Avatar>
      </ListItemAvatar>
    </ListItem>
  </List>

</StyledDrawer></div>
  )
}

export default DrawerRight