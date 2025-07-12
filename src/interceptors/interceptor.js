import axios from "axios";

export const AxiosInterceptor = axios.create({
  baseURL: "https://dummyjson.com",
});
