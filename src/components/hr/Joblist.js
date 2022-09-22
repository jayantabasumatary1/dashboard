import { Avatar,  createTheme, IconButton, List,ListItem, ListItemAvatar, ListItemButton, ListItemText, styled, ThemeProvider, Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import image1 from "../../images/image1.jpg"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PageButton from './Pagination';
import { getAPIdata } from './AxiosPost';
import { useState } from 'react';
import { useEffect } from 'react';
import DrawerRight from './DrawerRight';
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
  const [postsData, setPostsData] = useState([]); 
  const [DrawerData, setDrawerData]= useState("");
  const DisplayData =()=>{
    setDrawerData("hhhhhhhhhhh")
  }

  useEffect(()=>{
    getAPIdata().then(json=>{
      setPostsData(json)
      return json
  })
},[])
return (
    <>
    <ThemeProvider theme = {theme}>
        <StyledList >
          {postsData.map((user)=>(
            <ListItem key = {user.id} >
              <ListItemButton alignItems="flex-start" onClick={DisplayData} >
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
                <IconButton sx={{ float: "left", color: "rgba(127, 179, 224, 0.7)", display:{ lg: "none"}}}>
                  <MoreVertIcon/>
                </IconButton>
              </ListItemButton>
            </ListItem> 
            ))}   
        </StyledList>
        <PageButton/>
        </ThemeProvider>
        <DrawerRight/>
    </>
  )
}

export default Joblist