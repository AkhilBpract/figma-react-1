import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      return (window.location = "/a/login");
    }
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

axiosInstance.interceptors.request.use(function (config) {
  const token = "sfsdgfsiud98374";
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
export default axiosInstance;
