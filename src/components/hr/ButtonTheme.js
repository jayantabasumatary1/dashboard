import React, { createContext } from 'react'
import { CssBaseline, Switch, Tooltip } from '@mui/material'
import {Box, useTheme, ThemeProvider, createTheme, IconButton} from '@mui/material'
import { useState } from 'react';


const ButtonTheme = () => {
  const [ darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette:{
      mode: darkMode?"dark":"light",
    },
  });
  

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <Box>
      <Tooltip title="mode" > 
        <Switch defaultChecked
         onChange={()=>setDarkMode(!darkMode)}
         checked={darkMode}
         />
        </Tooltip>
      </Box>

    </ThemeProvider>
    
  )
}

export default ButtonTheme 