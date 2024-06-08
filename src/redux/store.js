import {configureStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import rootReducer from "./reducers";
import {tokenMiddleware} from "../middlewares/tokenMiddleware";
import { initializeAuth } from "./actions/authActions";

const createAppStore = async () => {
    try {
        const store = configureStore({
            reducer: rootReducer,
            middleware: [thunk, tokenMiddleware],
        });
        //this is where you can add initial actions that will be run on app startup
        //to check User Have a Token have or valid token
        await store.dispatch(initializeAuth());
        return store;
    } catch (err) {
        throw new Error("Some error occurred");
    }
};

export default createAppStore;




