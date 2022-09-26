import React from 'react'
import { Avatar, Drawer,List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, styled, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import {Divider} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export const drawerWidthRight = 400
const StyledDrawer = styled(Drawer)(({theme})=>({
  '& .MuiDrawer-root':{
    width: drawerWidthRight,
    flexShrink: 0,
    [theme.breakpoints.down("lg")]:{
      width: 0
    }
  },
  '& .MuiDrawer-paper': {
    width: drawerWidthRight,
    boxSizing: 'border-box',
    [theme.breakpoints.down("lg")]:{
        width: 0,
      display: 'none'
    }
  },

}))


const StyledList = styled(List) (({theme})=> ({
    '& .MuiListItem-root ':{
      padding: theme.spacing(2), 
      },
    '& .MuiListItemText-primary':{
      fontSize: 15,
      fontWeight:'bold' ,
    },
    '& .MuiListItemText-secondary':{
      color: "rgba(127, 179, 224, 0.7)"
    }
  }))

const DrawerRight = ({drawerData, idData}) => {
  return (
    <div>
        <StyledDrawer
    variant="permanent"
    anchor="right"
    open= "true"
  > <List>
    <ListItem sx={{ alignItems: "center", justifyContent: "center", paddingTop: 5, paddingBottom: 2,}}>
      <ListItemAvatar >
        <Avatar  sx={{ width: 80, height: 80 }} style={{ borderRadius: 10}}>
            <GoogleIcon fontSize='large' />
        </Avatar>
      </ListItemAvatar>
    </ListItem>
    { drawerData.map((drawer, index)=>{
        if (idData == drawer.id){
            return (
                <> 
                <ListItem disablePadding sx={{ textAlign: "center", justifyContent: "center", }} key = {drawer.id} > 
                 <ListItemText primary = {drawer.name } color= "primary" secondary={
                    <Typography variant='caption text' > {drawer.email}</Typography>
                 }>
                 </ListItemText>
            </ListItem>
            <StyledList>
                <Divider sx={{borderBottomWidth: '4px'  }} />
                <ListItem alignItems='flex-start'>
                    <FiberManualRecordIcon style={{ fontSize: 15, marginRight: 4, marginTop: 8 }}/>
                <ListItemText primary="About The Company"
                secondary={
                    <React.Fragment>
                    { Object.keys(drawer.company).map((key, i)=>( 
                        <Typography variant='caption text' key ={i}>
                          { drawer.company[key] }
                        </Typography>
                      )) }
                      </React.Fragment>
                      }>

                </ListItemText>
                </ListItem>
                
            </StyledList>
            </>
            )
        }
    }
    )}
  </List>

</StyledDrawer></div>
  )
}

export default DrawerRight