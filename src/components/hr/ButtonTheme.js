import { CssBaseline, Switch, Tooltip } from '@mui/material'
import {Box, useTheme, ThemeProvider, createTheme, IconButton} from '@mui/material'
import { useState } from 'react';


const ButtonTheme = (props) => {

  const handleTheme = ()=>{
    props.getTheme(true)

  };
  
  return (
    <Box>
      <Tooltip title="mode" > 
        <Switch defaultChecked
         onChange={handleTheme}
         />
        </Tooltip>
      </Box>

    
  )
}

export default ButtonTheme 