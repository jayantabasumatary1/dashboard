import { Card, CardContent, Box, Button, Typography } from '@mui/material'
import React from 'react'



const Posts = ({post}) => {
  return (

    <Box sx={{
        bgcolor: "#0A1929",
    }}>
        <Card sx={{
            maxWidth: "50%",
            bgcolor: "rgba(0, 0, 0, 0.4)",
            padding: "1rem",
            ml: 2,
            mt: 2

        }}>
            <CardContent>
                <Typography variant='h5'>
                {post.title}
                </Typography>
                <Typography>
                {post.body}
                </Typography>
                <Typography>
                {post.id}
                </Typography>
            </CardContent>
            </Card>
    </Box>      
  )
}

export default Posts