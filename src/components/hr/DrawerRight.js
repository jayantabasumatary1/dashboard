import React from 'react'
import { Avatar, Drawer,List, ListItem, ListItemAvatar,ListItemText, styled, Typography, Box, Grow, Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import {Divider} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import images from '../../images/images.jpg'
import { useState } from 'react';
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
  }))

  const icon = (
    <Box sx={{width: 280 }}>
      <List>
      <ListItem sx={{ alignItems: "center", justifyContent: "center", paddingTop: 3, paddingBottom: 2,}}>
      <ListItemAvatar >
        <Avatar sx={{ width: 100, height: 100, bgcolor:"rgba(127, 179, 224, 0.8)" }} style={{ borderRadius: 10}} src={images}>
        </Avatar>
      </ListItemAvatar>
    </ListItem >
      </List>
        <Box component="div" sx={{ textAlign: "center"}}> 
            <Typography variant='h2'color="rgba(127, 179, 224, 0.8)"  fontWeight="600" > Welcome To Flexday
               </Typography> 
          </Box>
          </Box>     
    
  );

const DrawerRight = ({drawerData, idData}) => {
  const [buttonText, setButtonText] = useState("Apply");
  const [disable, setDisable] = useState(false);
  if (idData == ""){
    return(
      <div>
        <StyledDrawer
        variant="permanent"
        anchor="right"
        open= "true">
          <List>
          <ListItem sx={{ alignItems: "center", justifyContent: "center", paddingTop: 5, paddingBottom: 2,}}>
          <Box sx={{ display: "flex"}} >
          <Grow
          in= {true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true? { timeout: 2500 } : {})}>
          {icon}
        </Grow> 
        </Box>
        </ListItem>
        </List>
        </StyledDrawer>
      </div>

    )
  }
  else{
    return(
      <div>
        <StyledDrawer
    variant="permanent"
    anchor="right"
    open= "true"
  > <List>
    <ListItem sx={{ alignItems: "center", justifyContent: "center", paddingTop: 5, paddingBottom: 2,}}>
      <ListItemAvatar>
      <Avatar sx={{ width: 80, height: 80, bgcolor:"rgba(127, 179, 224, 0.8)" }} style={{ borderRadius: 10}} >
        <GoogleIcon fontSize='large' />
      </Avatar>
      </ListItemAvatar>
    </ListItem>
    { drawerData.map((drawer, index)=>{
        if (idData == drawer.id){
            return (
                <> 
                <ListItem disablePadding sx={{ textAlign: "center", justifyContent: "center", }} key = {drawer.id} > 
                 <ListItemText primary = {drawer.name } color= "primary"  secondary={
                    <Typography variant='caption text' > {drawer.email}</Typography>
                 }>
                 </ListItemText>
            </ListItem>
            <StyledList>
                <Divider sx={{borderBottomWidth: '4px'  }} />
                <ListItem alignItems='flex-start'>
                    <FiberManualRecordIcon style={{ fontSize: 15, marginRight: 4, marginTop: 8 }}/>
                <ListItemText primary="About The Job"
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
                <ListItem alignItems='flex-start'>
                    <FiberManualRecordIcon style={{ fontSize: 15, marginRight: 4, marginTop: 8 }}/>
                <ListItemText primary="Required Skills"
                secondary={
                    <React.Fragment>
                    { Object.keys(drawer.address.geo).map((key, i)=>( 
                        <Typography variant='caption text' key ={i}>
                          { drawer.address.geo[key] }
                          
                        </Typography>
                      )) }
                      {drawer.address.street}{drawer.address.suite}{drawer.address.city}{drawer.address.zipcode}
                      </React.Fragment>
                      }>

                </ListItemText>
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <FiberManualRecordIcon style={{ fontSize: 15, marginRight: 4, marginTop: 8 }}/>
                <ListItemText primary="Top Candidates"
                secondary={
                    <React.Fragment>
                      {drawer.username}{drawer.phone}{drawer.website}
                      </React.Fragment>
                      }>

                </ListItemText>
                </ListItem>
                
            </StyledList>
            <Box  sx={{display: "flex",  justifyContent: "center" }}>
            <Button variant='contained' size='small' type='submit' onClick={()=>{setButtonText("Applied"); setDisable(true)  } } disabled = {disable}  >  {buttonText}</Button>
            </Box>
            </>
            )
        }
    }
    )}
  </List>
</StyledDrawer></div>
    )
  }  
}
export default DrawerRight