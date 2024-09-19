import axios from "axios";
import Cookies from "js-cookie";



let headers ={}

if (typeof  window !== 'undefined') {
    headers = {
        Authorization: "bearer " + Cookies.get("accessToken")
    }
    
}
export const axiosClient = axios.create ({
    baseURL:"http://localhost:3005/api/frontend/",
    headers:headers
}    
)
export default axiosClient