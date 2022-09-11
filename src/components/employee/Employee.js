import React, { useEffect, useState } from 'react'
import { Box, Grid,} from "@mui/material"
import Header from './Header';
import { getPosts } from './AxioS';
import JobAvailable from './JobAvailable';

const Employee = () => {

    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=>{
        getPosts().then(json=>{
            setPosts(json)
            return json
        }).then(json=>{
            setSearchResults(json)
        })
    }, [])


    return (
        <div>
            <Box sx={{
                bgcolor: "#0A1929",
            }}>
                <Header posts={posts} setSearchResults={setSearchResults} />
                </Box>
                <Box sx={{
                    flexGrow: 1,
                    paddingTop: 4,
                    bgcolor: "#0A1929",
                    paddingLeft: "0.6rem",
                    paddingRight: "0.6rem"
                }}>
                <JobAvailable searchResults={searchResults}/>
                </Box>
                <Box sx={{
                    bgcolor: "#0A1929",
                    height: "100vh",
                    minHeight: "100vh"
                }}>
                    </Box>
                
        </div>
    )
}

export default Employee