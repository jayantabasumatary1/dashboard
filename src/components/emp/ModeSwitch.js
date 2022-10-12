import React from 'react'
import { Box, createTheme } from '@mui/system'
import { Switch} from '@mui/material';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
 
const ModeSwitch = () => {
    const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div>
        <Box sx={{paddingLeft: 2 }}  >
        <Switch   
        onChange={toggleTheme} 
        checked={theme ==="dark"}/>
        </Box>
    </div>
  )
}

export default ModeSwitch