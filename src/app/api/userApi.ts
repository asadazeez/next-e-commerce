import axios from "axios"
import axiosClient from "./config/axiosClient"

export const userApi = {
    newUser : async function(body:any){
        return await axiosClient.post('user',body)
    },
    loginUser : async function(body:any){
        return await axiosClient.post('user/login',body)
    },
}

