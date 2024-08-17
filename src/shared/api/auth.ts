import axios from "axios";

export const authLink = axios.create({
    baseURL: 'https://accounts.spotify.com'
})