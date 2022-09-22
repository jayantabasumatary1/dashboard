import axios from "axios";

export const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getAPIdata = async(pageParam = 1)=>{
    try {
        const response = await API.get(`/users?_page=${pageParam}`)
        return response.data
    } catch (error) {
        return error.message
    }

}