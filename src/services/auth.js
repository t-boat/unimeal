import { apiClient } from "./config"


export const signUp = async (payload) => {
    return apiClient.post("/users/auth/signup", payload);
}


export const logIn = async (payload) => {
    return apiClient.post("/users/auth/login", payload);
}


export const bmi = async (payload) => {
    return apiClient.post("/users/bmi", payload);
}