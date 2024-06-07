import {combineReducers} from "redux";


import postsReducer from "./post";
import authReducer from "./auth";
import communityReducer from "./community";
import moderationReducer from "./moderator";
import userReducer from "./user";
import adminReducer from "./admin";


const rootReducer = combineReducers({
    posts: postsReducer,
    auth: authReducer,
    community: communityReducer,
    moderation: moderationReducer,
    user: userReducer,
    admin: adminReducer,
});
