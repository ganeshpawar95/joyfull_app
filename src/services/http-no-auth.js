import axios from "axios";
import { BASE_URL } from "../utils/constants";
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }

    if (error.response.status === 400 || 500) {
      if (error.response.data.message != undefined) {
        var errorMessage = error.response.data.message;
      } else {
        var errorMessage = error.response.data.error || "An error occurred.";
      }
      return Promise.reject(errorMessage);
    }
    return Promise.reject(error);
  }
);

export default instance;
