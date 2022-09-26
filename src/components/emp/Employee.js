import React from 'react'
import { useState, useEffect } from 'react'
import { getAPIdata } from './Axios'
import DrawerRight from './DrawerRight'
import Appbar from './AppBar'
import JobPosts from './JobPosts'
const Employee = () => {
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=>{
        getAPIdata().then(json=>{
            setPosts(json)
            return json
        }).then(json=>{
            setSearchResults(json)
        })
    }, [])
  return (
    <div>
        <Appbar/>
        <JobPosts/>
         
        
    </div>
  )
}

export default Employee