/**
 * @description Interceptor File
 */
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: "https://api.nestormind.com/"
});

/**
 * @description for request
 */
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("request  ", config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

/**
 * @description for response
 */
// Add a response interceptor

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response ", response);
    return response;
  },
  function (error) {
    console.log(error, "error");
    if (error.statusCode == 500) {
      window.location.href("/500");
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
