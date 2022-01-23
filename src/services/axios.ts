import axios, { AxiosInstance } from "axios";

const baseURL = "https://randomuser.me/";

const instance: AxiosInstance = axios.create({
  baseURL,
});

export default instance;
