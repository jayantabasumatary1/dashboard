import React from 'react'
import Posts from './Posts'
import { Box } from '@mui/system'

const JobAvailable = ({searchResults}) => {
    const results = searchResults.map(post => <Posts key={post.id} post ={post}/>)

    const content = results.length ? results : <article> <p>
        No matching posts</p> </article>
  return (
   <div>
  {content}
       
   </div>
    
  )
}

export default JobAvailable