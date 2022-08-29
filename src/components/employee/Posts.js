import { Box, Card, CardContent, CardActions, Typography, Grid, Button} from '@mui/material'
import React, { useState } from 'react'
import { Dialog, DialogContent, IconButton, DialogTitle } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const Posts = ({post}) => {
  const [open, setOpen] = useState(false)
  const handleClickOpen=()=>{
      setOpen(true);
  };
  const handleClose= ()=>{
      setOpen(false);
  };

  return (
<>
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
        <Button onClick={handleClickOpen} size="small" variant='outlined'>view</Button>
        <Button size="small" variant="outlined">apply</Button>
      </CardActions>
            </Card>
            </Grid>
            
            <Dialog open={open}  onClose={(_, reason)=>{
                        if (reason!== "backdropClick"){
                            {handleClose()}
                        }
                    }} fullWidth
                    
                    PaperProps={{
                        style: {
                          backgroundColor: 'white',
                          boxShadow: "none",  
                        },
                      }}>
                        <DialogTitle><Box sx={{
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "space-between",

                    }}>{post.title}
                        
                        <IconButton  onClick={handleClose} >
                            <CloseIcon />
                        </IconButton>

                    </Box></DialogTitle>
                         <DialogContent sx={{
                            padding: "1.5rem",
                        }}>
                          <Typography variant='body2' component="p"color="black"  >
                          {post.body}
                          </Typography>
                          <Typography variant='body2' component="p"color="black"  >
                          {post.id}
                          </Typography>                      
                       </DialogContent>
                      </Dialog>
                     
                      </>
        )}   

export default Posts