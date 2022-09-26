import { Avatar,  createTheme,InputBase, IconButton, List,ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Popover, styled, ThemeProvider, Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { getAPIdata } from './Axios'
import image1 from "../../images/React.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState, useEffect } from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import { drawerWidthRight } from './DrawerRight'
import DrawerRight from './DrawerRight'
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
const theme = createTheme({
  components:{
    MuiListItemButton:{
      defaultProps:{
        disableTouchRipple: true,
      }
    }
  }
})
const drawerWidth = 250;
const StyledList = styled(List) (({theme})=> ({
  '& .MuiListItem-root ':{
    padding: theme.spacing(1,4, 1, 4),
    width: `calc(100% - ${drawerWidth + drawerWidthRight}px)` ,
    marginLeft: `${drawerWidth}px`,
    marginRight: `${drawerWidthRight}px`,
    [theme.breakpoints.down("lg")]:{
      width: `calc(100% - ${drawerWidth}px)`
      
    },
    [theme.breakpoints.down("sm")]:{
        width: "100%",
        marginLeft: theme.spacing(1)
    },
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

const JobPosts = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [postsData, setPostsData] = useState([]);
  const [drawerData, setdrawerData] = useState([]) ;
  const [idData, setIdData] = useState("");
  useEffect(()=>{
    getAPIdata().then(json=>{
      setPostsData(json)
      return json
  }).then(json=>{
    setdrawerData(json)
  })
},[])
  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const handleId =()=>{
    setIdData("6")
  }
  const open = Boolean(anchorEl);
return (
    <>
    <ThemeProvider theme = {theme}>
        <StyledList  >
          {postsData.map((user,)=>(
            <ListItem key = {user.id} >
              <ListItemButton alignItems="flex-start" onClick={handleId} >
                <ListItemAvatar >
                  <Avatar src= {image1} style={{ borderRadius: 8 }} />
                </ListItemAvatar>
                <Box sx={{ flexGrow: 1}}>
                <ListItemText primary={user.name}
                 secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"              
              >
                {user.phone}
              </Typography><br/>
              { Object.keys(user.company).map((key, i)=>( 
                <Typography variant='caption text' key ={i}>
                  { user.company[key] }
                </Typography>
              )) }
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
                <IconButton onClick={handlePopover} sx={{ float: "left", color: "rgba(127, 179, 224, 0.7)", display:{ lg: "none"}}}>
                  <MoreVertIcon/>
                </IconButton>
                <Popover elevation={1}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}>
                  <List disablePadding >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                        <ReadMoreIcon/>
                        </ListItemIcon>
                        <ListItemText secondary="read More">
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <FilterListIcon/>
                        </ListItemIcon>
                        <ListItemText secondary="Applicants">
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List> 
                </Popover>
              </ListItemButton>
            </ListItem> 
            ))}   
        </StyledList>
        <DrawerRight drawerData ={drawerData} idData = {idData}/> 
        </ThemeProvider>
    </>
  )
}

export default JobPosts