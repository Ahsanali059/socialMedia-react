import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

export const refreshTokenAction = (refreshToken) => async (dispatch) => {
    try {
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
