import * as api from "../api/adminAPI.js"
import * as types from "../constants/adminConstants";

export const signInAction = (credential)=>async (dispatch)=>{
    try
    {
        const {error,data} = await api.signIn(credential);

        if(error)
        {
            throw new Error(error);
        }
        localStorage.setItem("admin",JSON.stringify(data));
        dispatch({
            type:types.SIGN_IN_SUCCESS,
        })
    }
    catch (error)
    {
        dispatch({
            type:types.SIGN_IN_FAIL,
            payload:error.message,
        })

    }
}

/**
 *
 * @returns {(function(*): Promise<void>)|*}
 */
export const logoutAction = () => async (dispatch) => {
    try
    {
        localStorage.removeItem("admin");
        dispatch({
            type:types.LOGOUT_SUCCESS
        })

    }catch (error)
    {
        console.log(error);
        console.log("something went wrong in logout action");
    }
};

export const getLogsAction = () => async (dispatch) => {
    try {
        const { error, data } = await api.getLogs();

        if (error) {
            throw new Error(error);
        }
        dispatch({
            type: types.GET_LOGS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: types.GET_LOGS_FAIL,
            payload: error.message,
        });
    }
};

export const deleteLogsAction = () => async (dispatch) => {
    try {
        const { error } = await api.deleteLogs();
        if (error) {
            throw new Error(error);
        }
        dispatch({
            type: types.DELETE_LOGS_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: types.DELETE_LOGS_FAIL,
            payload: error.message,
        });
    }
};

export const getServicePreferencesAction=()=> async (dispatch) => {
    try {
        const {error, data} = await api.getServicePreferences();
        if (error) {
            throw new Error(error);
        }
        dispatch({
            type: types.GET_SERVICE_PREFERENCES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: types.GET_SERVICE_PREFERENCES_FAIL,
            payload: error.message,
        });
    }
};

