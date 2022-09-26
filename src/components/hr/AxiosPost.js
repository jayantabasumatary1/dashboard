import axios from "axios";
export const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


export const getAPIdata = async()=>{
    try {
        const response = await API.get(`/users?_page=1&_limit=5`)
        return response.data
    } catch (error) {
        return error.message
    }
}