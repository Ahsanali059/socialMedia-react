import * as api from "../api/postAPI";
import * as types from "../constants/postConstants";

export const createPostAction = (formData) => async (dispatch) => {
    try {
        const {
            error = null,
            data = null,
            info = null,
            isInappropriate = false,
            confirmationToken = null,
        } = await api.createPost(formData);

        if (error) {
            throw new Error(error);
        }

        if (isInappropriate) {
            dispatchCreatePostFail(
                dispatch,
                types.CREATE_POST_FAIL_INAPPROPRIATE,
                null
            );
        } else if (confirmationToken) {
            dispatchCreatePostFail(
                dispatch,
                types.CREATE_POST_FAIL_DETECT_CATEGORY,
                confirmationToken
            );
        } else if (info) {
            dispatchCreatePostFail(
                dispatch,
                types.CREATE_POST_FAIL_CATEGORY_MISMATCH,
                info
            );
        } else {
            dispatchCreatePostSuccess(dispatch, types.CREATE_POST_SUCCESS, data);
        }
    } catch (error) {
        dispatchCreatePostFail(dispatch, types.CREATE_POST_FAIL, error.message);
    }
};


const dispatchCreatePostSuccess = (dispatch, type, payload) => {
    dispatch({
        type,
        payload,
        meta: {
            requiresAuth: true,
        },
    });
};

const dispatchCreatePostFail = (dispatch, type, payload) => {
    dispatch({
        type,
        payload,
        meta: {
            requiresAuth: true,
        },
    });
};

export const clearCreatePostFail = () => async (dispatch) => {
    dispatch({
        type: types.CLEAR_CREATE_POST_FAIL,
        meta: {
            requiresAuth: true,
        },
    });
};

export const confirmPostAction = (confirmationToken) => async (dispatch) => {
    try {
        const { error, data } = await api.confirmPost(confirmationToken);

        if (error) {
            throw new Error(error);
        }

        dispatch({
            type: types.CONFIRM_POST_SUCCESS,
            payload: data,
            meta: {
                requiresAuth: true,
            },
        });
    } catch (error) {
        dispatch({
            type: types.CONFIRM_POST_FAIL,
            payload: error.message,
            meta: {
                requiresAuth: true,
            },
        });
    }
};

/**
 * In the context of Redux actions, meta is an optional field in an action object that can be used to include additional information about the action. This information is not related to the action's payload and can be used by middleware or reducers to perform additional processing or to influence their behavior.
 * @param confirmationToken
 * @returns {(function(*): Promise<void>)|*}
 */
export const rejectPostAction = (confirmationToken) => async (dispatch) => {
    try {
        const { error, data } = await api.rejectPost(confirmationToken);

        if (error) {
            throw new Error(error);
        }

        dispatch({
            type: types.REJECT_POST_SUCCESS,
            payload: data,
            meta: {
                requiresAuth: true,
            },
        });
    } catch (error) {
        dispatch({
            type: types.REJECT_POST_FAIL,
            payload: error.message,
            meta: {
                requiresAuth: true,
            },
        });
    }
};

export const getPostAction = (id) => async (dispatch) => {
    try {
        const { error, data } = await api.getPost(id);

        if (error) {
            throw new Error(error);
        }

        dispatch({
            type: types.GET_POST_SUCCESS,
            payload: data,
            meta: {
                requiresAuth: true,
            },
        });
    } catch (error) {
        dispatch({
            type: types.GET_POST_FAIL,
            payload: error.message,
            meta: {
                requiresAuth: true,
            },
        });
    }
};

