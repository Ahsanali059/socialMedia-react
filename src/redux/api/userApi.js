import {API,handleApiError} from "./utils.js";

export const getUsers = async(id)=>{
    try
    {
        const {data} = await API.get(`/users/${id}`);
        return {error:null,data};
    }
    catch (error)
    {
        return handleApiError(error);
    }
}