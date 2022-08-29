import { Card, CardContent, Typography, Grid, makeStyles} from '@mui/material'
import React from 'react'

const Posts = ({post}) => {

  return (
    <Grid container>
    <Grid item xs ={12} sm={6} md={4} >
            <Card sx={{
            bgcolor: "rgba(0, 0, 0, 0.4)",
            padding: "1rem",
        }}>
            <CardContent>
                <Typography gutterBottom variant='h5' component="h2">
                {post.title}
                </Typography>
                <Typography variant='body2' component="p" >
                {post.body}
                </Typography>
                <Typography>
                {post.id}
                </Typography>
            </CardContent>
            </Card>
            </Grid>
            </Grid>
        )}   

export default Posts