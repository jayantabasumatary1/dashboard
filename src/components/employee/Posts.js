import { Card, CardContent, CardActions, Typography, Grid, Button} from '@mui/material'
import React from 'react'

const Posts = ({post}) => {

  return (
    
    <Grid item xs ={12} sm={6} md={4} >
            <Card sx={{
            border: "3px solid #0A1929",
            bgcolor: "rgba(0, 0, 0, 0.2)",
            padding: "1rem",
            ml: 2,
            mb: 2,
            mr:2,
            height: 300,
            color: "white",
            transition: "transform 0.15s ease-in-out",
            "&: hover":{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              transform: "scale3d(1.05,1.05,1)"
            }
        }}>
            <CardContent>
                <Typography variant='h5' component="h2" >
                {post.title}
                </Typography>
                <Typography variant='body2' component="p" >
                {post.body}
                </Typography>
                <Typography>
                {post.id}
                </Typography>
            </CardContent>
            <CardActions>
        <Button size="small" variant='outlined'>view</Button>
        <Button size="small" variant="outlined">apply</Button>
      </CardActions>
            </Card>
            </Grid>
            
        )}   

export default Posts