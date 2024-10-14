import { combineReducers } from "@reduxjs/toolkit";
import userReducers from "../actions/signupAction";

const reducer = combineReducers({
    signup: userReducers,
})

export default reducer