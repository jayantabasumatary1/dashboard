import React from 'react'
import Header from './Header'
import JobList from './JobList'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { ThemeProvider } from 'styled-components'
import SearchBar from './SearchBar'

const Reqruiter = () => {
  return (
    <div>
        <Header/>
        <JobList/>
        </div>
  )
}

export default Reqruiter