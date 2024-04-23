import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
export default combineReducers({
    userSlice,
    authSlice,
});
