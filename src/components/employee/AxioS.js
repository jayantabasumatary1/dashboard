import axios from "axios";
import React from "react";

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com' 
})

export const getPosts = async()=>{
    const response = await api.get('/posts')
    return response.data

}