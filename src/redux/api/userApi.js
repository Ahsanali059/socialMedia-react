import {API,handleApiError} from "./utils.js";

/**
 *
 * @param id
 * @returns {Promise<{data: null, error: *|string}|undefined|{data: any, error: null}>}
 */
export const getUser = async(id)=>{
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

export const updateUser = async(id,formData)=>{
    try
    {
        const { data } = await API.put(`/users/${id}`, formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return { error: null, data };
    }
    catch (error)
    {
        return handleApiError(error);
    }
}

export const getPublicUsers=async()=>{
    try
    {
        const {data} = await API.get("/users/public-users");
        return {error:null,data};
    }
    catch (error)
    {
        return handleApiError(error);
    }
}

