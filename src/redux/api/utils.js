import axios, {request} from "axios";
import process from "../../../.eslintrc.cjs";

const BASE_URL = "http://localhost:3000"

const ADMIN_URL = `${REACT_APP_API_URL}/admin`;

/**
 *
 * @param request
 * @returns {*}
 */
const authInterceptor = (request)=>{
    const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;
    if (accessToken) {
        request.headers.Authorization = `Bearer ${accessToken}`;
    }
    return request;
}

/**
 *
 * @param req
 * @returns {*}
 */
const adminAuthInterceptor = (req) => {
    const accessToken = JSON.parse(localStorage.getItem("admin"))?.accessToken;
    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req;
};

export const API = axios.create({
    baseURL:BASE_URL,
})

export const ADMINAPI = axios.create({
    baseURL:ADMIN_URL,
})

export const CUMMUNITY_API=axios.create({
    baseURL:BASE_URL,
})

API.interceptors.request.use(authInterceptor);
ADMINAPI.interceptors.request.use(adminAuthInterceptor);
CUMMUNITY_API.interceptors.request.use((request)=>{
    request.headers["Content-Type"] = "application/json";
    return authInterceptor(request);
})









