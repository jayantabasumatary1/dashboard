import React from 'react'
import Posts from './Posts'
import { Grid } from '@mui/material'

const JobAvailable = ({searchResults}) => {
    const results = searchResults.map(post => <Posts key={post.id} post ={post}/>)

    const content = results.length ? results : <article> <p>
        No matching posts</p> </article>
  return (
    <Grid container>
      {content}
      </Grid>
    
  )
}

export default JobAvailable