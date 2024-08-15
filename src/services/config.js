import axios from "axios";


const BaseURL = import.meta.env.VITE_BASE_URL;


export const apiClient = axios.create({baseURL: BaseURL});


export const getToken = () => localStorage.getItem("accessToken");
export const clearToken = () => localStorage.removeItem("accessToken");