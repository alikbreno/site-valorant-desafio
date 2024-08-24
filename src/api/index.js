import axios from "axios"

const instance = axios.create({
    baseURL: 'https://valorant-api.com'
})

export default instance