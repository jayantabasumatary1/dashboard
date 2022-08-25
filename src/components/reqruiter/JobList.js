import React from 'react'
import { Box, Button, Grid, makeStyles, Typography, } from "@mui/material"


const skills = ["MongoDB ,", "Express ,", "Angular ,", "NodeJS"];


const JobList = () => {
    return (
        <div>
            <Box sx={{
                mt: 6,
                ml: 8
            }}>
                <Grid container alignItems='center'>
                    <Grid item xs>
                        <Typography variant='subtitle1'>MEAN full Stack Developer</Typography>
                    </Grid>
                    <Grid item container xs>
                        {
                            skills.map((skill) => (
                                <Grid key={skill} item>
                                    {skill}
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid item xs>
                        <Button variant='outlined'>Apply</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default JobList