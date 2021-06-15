import axios from "axios";
import logger from "./LogService";
import toast from "react-toastify"

axios.interceptors.response.use(null,error => {
    const excpectedError = 
        error.response &&
        error.response.status >= 400 &&
        error.response.status <500;
    if(! excpectedError) {
        logger.log(error)
        toast.error("An unexpected error has occured");
    }
    return Promise.reject(error)
});
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete : axios.delete
}