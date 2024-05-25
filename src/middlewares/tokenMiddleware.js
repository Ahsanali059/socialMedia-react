import axios from "axios";

/*
In feature url comming from env file
 */
const API = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

/**
 * Interceptors: Axios interceptors allow you to run your code or modify the request or response before the request is sent or after the response is received.
 * This line registers a request interceptor. The function provided will be called before each request is sent.
 */
API.interceptors.request.use((req) => {
    const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;
    if (accessToken)
    {
        req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req;
});

/**
 *
 * @param refreshToken
 * @returns {(function(*): Promise<void>)|*}
 */
export const refreshTokenAction = (refreshToken) => async (dispatch) => {
    try
    {
        const response = await API.post("/users/refresh-token", {
            refreshToken,
        });
        const profile = JSON.parse(localStorage.getItem("profile"));
        const payload = response.data;
        localStorage.setItem("profile", JSON.stringify({ ...profile, ...payload }));

        dispatch({
            type: "REFRESH_TOKEN_SUCCESS",
            payload: payload,
        });
    } catch (error) {
        localStorage.removeItem("profile");
        dispatch({
            type: "REFRESH_TOKEN_FAIL",
            payload: error.response.data,
        });
    }
};
