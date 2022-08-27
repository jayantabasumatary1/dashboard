import React from 'react'
import { useEffect, useState } from 'react';
import {  Grid, Card, CardContent, Typography, Button, CardActions, CardMedia, createTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ThemeProvider } from 'styled-components';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'

const theme = createTheme({
    typography:{
        body2:{
            fontWeight: 500,
        },
        caption:{
            fontSize: 10,
        },
    },
})


const JobList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(()=>
    {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>
            {
                console.log("geting from ::::", res.data)
                setData(res.data)
            }).catch(err => console.log(err))
    },[])
    return (
        <div>
            {
                <Box sx={{}}>
                    {
                data.map(data=>(
                    <Box key={data.id.value} sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: 'white',
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        marginTop: "0.6rem",
                    }}><Grid container justifyContent="center">
                    <Grid item xs = {10}>
                            <Card sx={{
                                maxWidth:"auto",
                                maxHeight:150,
                                padding: "0 2rem 0 2rem",
                                bgcolor: "black",
                                opacity: 0.7

                            }}>
                                <CardMedia
                                height = "100"
                                />
                                <Box sx={{
                                    
                                    backgroundColor: "black",
                                    color: "white",
                                    transition: "transform 0.15s ease-in-out",
                                    "&: hover":{
                                        backgroundColor: "rgb(22, 24, 23)",
                                        transform: "scale3d(1.05,1.05,1)"
                                    }}}>
                                <CardContent sx={{}}>
                                    <ThemeProvider theme={theme}>
                                    <Typography variant = "body2" component = "div" >
                                        {data.id}
                                    </Typography>
                                    <Typography variant = "body1" component = "div">
                                        {data.title}
                                    </Typography>
                                    <Typography variant = "caption" component = "div">
                                        postedOn
                                    </Typography>
                                    </ThemeProvider>
                                </CardContent>
                                <CardActions sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}>
                                    <Button sx={{
                                        border:1,
                                        borderColor: "white",
                                        
                                    }} size = "small" variant='contained'>view</Button>
                                    <Button sx={{
                                        border:1,
                                        borderColor: "white",
                                        
                                    }}  size = "small" variant='contained' onClick={()=>{
                                        navigate(
                                            '/about');
                                    }}  >delete</Button>
                                    
                                </CardActions>
                                </Box>
                            </Card>
                        </Grid>
                        </Grid>
                        </Box >

                ))}
                </Box>
            }
            

        </div>
    )
}

export default JobList