import { Avatar, Button, createTheme, CssBaseline, Drawer, IconButton, List,ListItem, ListItemAvatar, ListItemButton, ListItemSecondaryAction, ListItemText, styled, ThemeProvider, Typography } from '@mui/material'
import { Breakpoint, Box } from '@mui/material'
import React from 'react'
import image1 from "../../images/image1.jpg"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DetailsIcon from '@mui/icons-material/Details';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CircleIcon from '@mui/icons-material/Circle';
import { Stack } from '@mui/system';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const StyledDiv = styled('div')(({theme})=>({
display: "inline-block",
color: "#444",
background: "#DDD",
maxWidth: "auto",
padding: "0 3px 0 3px",
marginRight: theme.spacing(2),
borderRadius: 5,
marginTop: 5
}))

const StyledList = styled(List) (({theme})=> ({
  '& .MuiListItem-root ':{
    padding: theme.spacing(1,4, 1, 4),
      '& :hover':{
        transition: "transform 0.25s ease-in-out",
        backgroundColor: "rgba(127, 179, 224, 0.3)",
        transform: "scale3d(1.02,1.02,1)"
    }, 
  },
  '	& .MuiListItemButton-root':{
    backgroundColor: " rgba(127, 179, 224, 0.1)",
    borderRadius: 8,
    boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.4)",
    '& :hover':{
      transition: "none",
      transform: "none",
      backgroundColor: "transparent"
  },
  },
  '& .MuiListItemText-primary':{
    fontSize: 20,
    fontWeight:'bold' ,
    [theme.breakpoints.down("md")]:{
      fontSize: 17
    },
  },
  '& .MuiListItemText-secondary':{
    color: "rgba(127, 179, 224, 0.7)"

  }
}))

const Joblist = () => {
  return (
    <>
        <StyledList sx={{}} >
            <ListItem >
              <ListItemButton alignItems="flex-start"  >
                <ListItemAvatar >
                  <Avatar src= {image1} style={{ borderRadius: 8 }} />
                </ListItemAvatar>
                <Box sx={{ flexGrow: 1}}>
                <ListItemText primary="Full Stack developer"
                 secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"              
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}<br></br>
              <Typography variant='caption text' >
                <FiberManualRecordIcon style={{ fontSize: 10, marginRight: 4  }}/>
                posted on
                <FiberManualRecordIcon style={{ fontSize: 10, margin: "0 4 0 4" }}/>
                full time
              </Typography>
              <Box>
                <StyledDiv>
                <Typography variant='OVERLINE TEXT'color="white" > ReactJs</Typography>
              </StyledDiv>
              <StyledDiv>
              <Typography variant='OVERLINE TEXT'color="white"> NextJs</Typography>
              </StyledDiv>
              <StyledDiv>
              <Typography variant='OVERLINE TEXT'color="white"> ExpressJs</Typography>
              </StyledDiv>

              </Box>
            </React.Fragment> }>
                </ListItemText>
                </Box>
                <IconButton sx={{ float: "left", color: "rgba(127, 179, 224, 0.7)", display:{ lg: "none"}}}>
                  <MoreVertIcon/>
                </IconButton>
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton alignItems="flex-start"  >
                <ListItemAvatar >
                  <Avatar src= {image1} style={{ borderRadius: 8 }} />
                </ListItemAvatar>
                <Box sx={{ flexGrow: 1}}>
                <ListItemText primary="Full Stack developer"
                 secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"              
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}<br></br>
              <Typography variant='caption text' >
                <FiberManualRecordIcon style={{ fontSize: 10, marginRight: 4  }}/>
                posted on
                <FiberManualRecordIcon style={{ fontSize: 10, margin: "0 4 0 4" }}/>
                full time
              </Typography>
              <Box>
                <StyledDiv>
                <Typography variant='OVERLINE TEXT'color="white" > ReactJs</Typography>
              </StyledDiv>
              <StyledDiv>
              <Typography variant='OVERLINE TEXT'color="white"> NextJs</Typography>
              </StyledDiv>
              <StyledDiv>
              <Typography variant='OVERLINE TEXT'color="white"> ExpressJs</Typography>
              </StyledDiv>

              </Box>
            </React.Fragment> }>
                </ListItemText>
                </Box> 
                <IconButton sx={{ float: "left",color: "rgba(127, 179, 224, 0.7)", display:{ lg: "none"}}}>
                  <MoreVertIcon/>
                </IconButton>
              </ListItemButton>
            </ListItem>
        </StyledList>
    </>
  )
}

export default Joblist