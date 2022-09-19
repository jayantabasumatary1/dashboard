import React from 'react'
import { Box } from '@mui/system'
import { IconButton, InputBase,} from '@mui/material'
import { styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '25ch',
      },
    },
    [theme.breakpoints.down('sm')]:{
      display: "none"
    },
    [theme.breakpoints.down('md')]:{
      width: '7ch',
      '&:focus': {
        width: '12ch',
      },
    }
  },
}));
const SearchBar = () => {
  return (
    
    <Box sx={{
      borderRadius: 20,
      backgroundColor: 'rgba(127, 179, 224, 0.7)',
      height:"32px",
      display: "flex",
      border: 1,
      boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.4)",
    }} >
      <StyledInputBase placeholder='Search...'inputProps={{
          style:{ height:"14px", backgroundColor: "white", borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }, 
        }}>
        </StyledInputBase>
        <IconButton sx={{
          color: "black", display: {sm: {color: "white" } }
        }}  >
        <SearchIcon />
        </IconButton>   
    </Box>
  )
}

export default SearchBar