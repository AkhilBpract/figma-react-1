import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      return (window.location = "/");
    }
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

axiosInstance.interceptors.request.use(function (config) {
  return config;
});
export default axiosInstance;
