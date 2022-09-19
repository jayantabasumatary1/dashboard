import React from 'react'
import Navbar from '../components/hr/Navbar'
import ButtonTheme from '../components/hr/ButtonTheme'
import Joblist from '../components/hr/Joblist'
import { Box } from '@mui/system'
import DrawerRight, { drawerWidth } from '../components/hr/DrawerRight'
import { styled } from '@mui/material'

const StyledBox= styled(Box)(({theme})=>({
  width : `calc(100% - ${drawerWidth}px)`,
  [theme.breakpoints.down("lg")]:{
    width: "100%"
  }
}))

const Hr = () => {

  return (
    <>
    <StyledBox sx={{
    }} >
    <Navbar/>
      <ButtonTheme/>
      <Joblist/>
      <DrawerRight/>
    </StyledBox> 
    </>

  )
}

export default Hr