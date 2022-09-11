import React, { useState } from 'react'
import { Box, Button, Typography,  Paper, } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { Dialog, InputBase, DialogContent, IconButton, } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

const Header = ({ posts, setSearchResults}) => {
    const handleSubmit = (e) => e.preventDefault()
    const handleSearchChange=(e)=>{
        if(!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))
        setSearchResults(resultsArray)
    }

    const [open, setOpen] = useState(false);
    const handleClickOpen=()=>{
        setOpen(true);
    };
    const handleClose= ()=>{
        setOpen(false);
    };

  return (
    <div>
        
        <Box  sx={{
                    color: "white",
                    padding: "2rem",
                    bgcolor: "rgba(0, 0, 0, 0.4)"
                }}><Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 2rem 0 2rem"

                }}>
                    <Typography variant='h5'>JOB LIST AVAILABLE</Typography>
                    <Button  variant='outlined' startIcon={ <SearchIcon/> }
                    onClick={handleClickOpen} 
                    sx={{
                        color: "white",
                        borderRadius: "16px"
                    }}
                    >Search...</Button>
                    <Dialog open={open}  onClose={(_, reason)=>{
                        if (reason!== "backdropClick"){
                            {handleClose()}
                        }
                    }} fullWidth
                    
                    PaperProps={{
                        style: {
                          backgroundColor: 'rgba(127, 179, 224, 0.2)',
                          boxShadow: "none",  
                          top: "-36vh"
                        },
                      }}>
                    
                        <DialogContent sx={{
                            padding: "0.1rem"
                        }}>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "auto",
                            backgroundColor: "black" }}
                            
                        >
                            
                        <InputBase
                        onChange={handleSearchChange}
                        sx={{ ml: 1, flex: 1, 
                        input: {
                            color: "white",
                        }}}
                        placeholder="Search Job"/>

                        <IconButton onSubmit={handleSubmit} color='primary' type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" color="primary" />
                        <IconButton color="primary" sx={{ p: '10px' }}>
                        <CloseIcon onClick={handleClose} />
                        </IconButton>
                        </Paper>
                            
                        </DialogContent>
                        
                    </Dialog>

                </Box>                      
                </Box>
                
    </div>
  )
}

export default Header