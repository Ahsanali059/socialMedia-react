import * as api from "../api/authAPI";
import * as types from "../constants/authConstants";
import { isValidToken } from "../../utils/authUtils";
import { refreshTokenAction } from "./refreshTokenAction";

export const initializeAuth = () => async (dispatch) => {
    const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;
    const refreshToken = JSON.parse(
        localStorage.getItem("profile")
    )?.refreshToken;

    if (accessToken && refreshToken) {
        if (isValidToken(accessToken)) {
            dispatch(setAccessToken(accessToken));
            dispatch(setRefreshToken(refreshToken));
            dispatch(setUserData(JSON.parse(localStorage.getItem("profile")).user));
        } else {
            await dispatch(refreshTokenAction(refreshToken));
        }
    }
};

export const setAccessToken = (accessToken) => async (dispatch) => {
    dispatch({ type: types.SET_ACCESS_TOKEN, payload: accessToken });
};

export const setRefreshToken = (refreshToken) => async (dispatch) => {
    dispatch({ type: types.SET_REFRESH_TOKEN, payload: refreshToken });
};

export const setUserData = (userData) => async (dispatch) => {
    dispatch({ type: types.SET_USER_DATA, payload: userData });
};

export const setInitialAuthState = (navigate) => async (dispatch) => {
    await dispatch({ type: types.LOGOUT });
    navigate("/signin");
};

export const clearMessage = () => async (dispatch) => {
    dispatch({ type: types.CLEAR_MESSAGE });
};

export const logoutAction = () => async (dispatch) => {
    try {
        const { data } = await api.logout();
        localStorage.removeItem("profile");
        dispatch({ type: types.LOGOUT, payload: data });
    } catch (error) {
        dispatch({ type: types.LOGOUT, payload: types.ERROR_MESSAGE });
    }
};

