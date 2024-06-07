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

