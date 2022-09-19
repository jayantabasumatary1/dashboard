import React from 'react'
import { Drawer, styled } from '@mui/material'
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


const DrawerRight = () => {
  return (
    <div>
        <StyledDrawer
    variant="permanent"
    anchor="right"
    open= "true"
  >
</StyledDrawer></div>
  )
}

export default DrawerRight