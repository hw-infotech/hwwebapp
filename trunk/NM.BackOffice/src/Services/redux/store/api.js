import axios from "axios";

const apidata = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers:"ao6ruUR+L9gXA1woLiJ11Poh+RQJ3Ucm6wcdNeZFQYGS/rO18MYP+DY0VIG883OePHKOkb2XqhkfksFIvkvsrg=="
});
apidata.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
apidata.interceptors.response.use(
  (response) => {
    console.log("hlo", response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default apidata;
