import { combineReducers } from "redux";
import { areasReducer } from "./areasReducer";
import { authReducer } from "./authReducer";
import { projectsQAReducer } from "./projectsQAReducer";
import { resourcesReducer } from "./resourcesReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    areas: areasReducer,
    projectsQA: projectsQAReducer,
    resources: resourcesReducer,
});