import { Avatar,  createTheme, IconButton, List,ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Popover, styled, ThemeProvider, Typography, InputBase } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { getAPIData } from './Axios'
import image1 from "../../images/React.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState, useEffect } from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import { drawerWidthRight } from './DrawerRight'
import DrawerRight from './DrawerRight'
import SortButton from './SortButton'
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
    },
    MuiIconButton:{
      defaultProps:{
        disableRipple: true,
      }
    }
  }
})
const drawerWidth = 250;
const StyledList = styled(List) (({theme})=> ({
  '& .MuiListItem-root ':{
    padding: theme.spacing(0,4, 1, 4),
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
const StyledSearchList= styled(List)(({theme})=>({
  '& .MuiListItem-root ':{
    padding: theme.spacing(1,2, 0, 2.5),
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
  }
}))

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: 'rgba(127, 179, 224, 0.5)',
  marginLeft: 0,
  marginRight: theme.spacing(2),
  height: "32px",
  boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.4)",
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: "black"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  height: "32px",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '12ch',
      '&:focus': {
        width: '20ch',
    },
  },
}));

const skills=[
  {skill: "ReactJS"},
  {skill: "NextJS"},
  {skill: "ExpressJS"},
  {skill: "MongoDB"}
]

const JobPosts = () => {
  const [postsData, setPostsData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [idData, setIdData] = useState("");
  const[ filterValue, setFilterValue]= useState("")
  const [anchorEl, setAnchorEl] = useState(null);
  useEffect(()=>{
    getAPIData().then(json=>{
      setPostsData(json)
      return json
  }).then(json=>{
    setSearchData(json)
  })
},[])
console.log(postsData)
const handleSearch = (e)=>{
  if(e.target.value == ''){
    setPostsData(searchData)
  }
  else{
    const filterResult = searchData.filter(item => item.name.toLowerCase().includes(e.target.value))
    setPostsData(filterResult)
  }
  setFilterValue(e.target.value)
}
  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  
  const handleId =(id)=>{
    setIdData(id)
  }
  
  const open = Boolean(anchorEl);
return (
  
    <div>
    <ThemeProvider theme = {theme}>
      <StyledSearchList disablePadding>
        <ListItem >
          <Box sx={{ flexGrow: 1, display: "flex"}} >
          <IconButton sx={{color:"#0A1929" }}>
          <SortIcon/>
          </IconButton>
          <Box sx={{ display:{sm: "none", md :"block" }}}  >
          <SortButton/>
          </Box>
          
          </Box>
        <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'rgba(127, 179, 224, 1)' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={filterValue}
              onChange={(e)=>handleSearch(e)}
            />
          </Search>
        </ListItem>
      </StyledSearchList>
        <StyledList  >
          {postsData.map((user)=>(
            <ListItem key = {user.id} >
              <ListItemButton alignItems="flex-start" onClick={()=>handleId(`${user.id}`) } >
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
                {skills.map((skil)=>(
                  <StyledDiv key={skil} >
                  <Typography variant='OVERLINE TEXT'color="black" > {skil.skill}</Typography>
                </StyledDiv>
                ))}
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
        </ThemeProvider>
        <DrawerRight drawerData ={postsData} idData = {idData}/> 
    </div>
  )
}

export default JobPosts