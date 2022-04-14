import axios from "axios";

const apidata = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

apidata.interceptors.request.use((config) => {
    return config

}, (error) => {
    return Promise.reject(error)
});

apidata.interceptors.response.use((response) => {
    return response

}, (error) => {

    return Promise.reject(error)
});
export default apidata