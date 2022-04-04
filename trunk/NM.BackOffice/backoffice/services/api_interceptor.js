import axios from "axios";

const api = axios.create({
    api: "https://localhost:44375/"
})

api.interceptors.request.use((config) => {
    console.log(" request config", config);
}, (error) => {
    console.log("request error", error);
})

api.interceptors.response.use((response) => {
    console.log("response config", response);
}, (error) => {
    console.log("response error", error);
})

export default api