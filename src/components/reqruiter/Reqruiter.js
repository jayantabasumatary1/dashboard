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
        <Grid container justify = "center">
            <Grid item xs ={10}>
            <SearchBar/>
        </Grid>
        </Grid>
        </div>
  )
}

export default Reqruiter