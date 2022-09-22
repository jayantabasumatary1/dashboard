import React from 'react'
import {  createTheme, Pagination, Stack } from '@mui/material'
import { Box, ThemeProvider } from '@mui/system'

const theme = createTheme({
    components:{
        MuiIconButton:{
            defaultProps:{
                disableTouchRipple: true
            }
        }
    }
})
const PageButton = () => {
  return (
    <ThemeProvider theme= {theme} > 
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Stack spacing={2} >
        <Pagination count={5} color="primary"> </Pagination>
        </Stack>
       
    </Box>
    </ThemeProvider>
  )
}

export default PageButton