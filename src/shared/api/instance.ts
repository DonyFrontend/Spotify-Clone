import axios, { AxiosInstance } from "axios";

const token = localStorage.getItem("token");

export const instance: AxiosInstance = axios.create({
    baseURL: 'https://api.spotify.com',
    headers: {
        Authorization: token
    }
})