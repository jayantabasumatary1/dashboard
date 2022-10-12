import axios from "axios";
export const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


export const getAPIData = async(param = 1)=>{
    try {
        const response = await API.get(`/posts?_page=${param}`)
        return response.data
    } catch (error) {
        return error.message
    }
}