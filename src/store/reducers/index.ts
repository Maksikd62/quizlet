import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import TestsReducer from "./tests";


export const rootReducer = combineReducers({
    authReducer: AuthReducer,
    testsReducer: TestsReducer
});