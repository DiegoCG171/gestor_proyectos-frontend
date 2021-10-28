import { combineReducers } from "redux";
import { areasReducer } from "./areasReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    areas: areasReducer 
});