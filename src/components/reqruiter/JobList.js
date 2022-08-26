import React from 'react'
import { useEffect, useState } from 'react';
import {  Grid, Card, CardActionArea, CardContent, Typography, Button, CardActions, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
const JobList = () => {
    const [emp, setEmp] = useState([]);

    const fetchData = ()=>{
        fetch("https://randomuser.me/api/?nat=us&results=9&page=1").then((response)=>{
            return response.json();
        }).then((data)=>
        {
            let userData = data.results
            setEmp(userData)
        });
    }


    useEffect(()=>
    {
        fetchData();
    },[])
    return (
        <div>
            {
                <Box sx={{
                    
                }}>
                    {
                emp.map(data=>(
                    <Box key={data.id.value} sx={{
                        display: "flex",
                            justifyContent: "space-between",
                        bgcolor: "black",
                        color: 'white',
                        padding: '2rem',
                        marginTop: "0.3rem"
                    }}><Grid container justifyContent="center">
                    <Grid item xs = {10}>
                        
                            <Card sx={{
                                maxWidth:300,
                                maxHeight:200
                            }}>
                                <CardMedia
                                component = "img"
                                height = "80"
                                />
                                <CardContent>
                                    <Typography variant = "body2" component = "div">
                                        {data.name.first}
                                    </Typography>
                                    <Typography variant = "body1" component = "div">
                                        {data.name.last}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box sx={{
                                        
                                    }}>
                                    <Button size= "small" variant='contained'>view</Button>
                                    <Button sx={{
                                        border:1,
                                        borderColor: "black",
                                        
                                    }} size = "small" variant='contained'>delet</Button>
                                    </Box>
                                </CardActions>

                            </Card>



                     
                        </Grid>
                        
                        </Grid>
                        </Box >

                ) )
                    }
                </Box>
            }
            

        </div>
    )
}

export default JobList