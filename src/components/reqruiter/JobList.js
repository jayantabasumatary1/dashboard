import React from 'react'
import { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import { Button, Grid, Typography } from '@mui/material';

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
                <Box sx={{
                    bgcolor: "primary.dark",
                    '&:hover':{
                        bgcolor:"primary.main",
                        opacity: [0.9, 0.8, 0.7],
                    },
                    marginTop: "0.5rem",
                    paddingLeft:"2rem",
                    paddingRight: "2rem"
                    
                    
                }}>
                    <Grid container justifyContent="center">
                    <Grid item xs={8}>
                    <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Typography variant = "h6"> job name</Typography>
                    <Button variant = "outlined">view</Button>
                        </Box>
                    </Grid></Grid>
                </Box>
                

            </div>
    )
}

export default JobList