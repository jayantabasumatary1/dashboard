import { MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SearchBar = () => {
  return (
    
    <Box>
        <select>
            <MenuItem value = "Full time">Full time</MenuItem>
            <MenuItem value = "part time">part time</MenuItem>
            <MenuItem value = "intern">intern</MenuItem>
        </select>
    </Box>
  )
}

export default SearchBar