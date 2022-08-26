import React from 'react'
import Header from './Header'
import JobList from './JobList'
import image1 from "../../images/image1.jpg"
import { Box } from '@mui/system'
import "./JobList.css"

const Reqruiter = () => {
  return (
    <Box className= "Bcontainer" sx={{
      backgroundColor: "#000"
    }}>
        <Header/>
        <JobList/>
        </Box>
  )
}

export default Reqruiter