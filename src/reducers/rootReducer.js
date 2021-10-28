import { combineReducers } from "redux";
import { areasReducer } from "./areasReducer";
import { authReducer } from "./authReducer";
import { projectsQAReducer } from "./projectsQAReducer";
import { resourcesReducer } from "./resourcesReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    areas: areasReducer,
    projectsQA: projectsQAReducer,
    resources: resourcesReducer,
});