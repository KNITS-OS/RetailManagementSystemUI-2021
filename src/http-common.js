import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  }
});