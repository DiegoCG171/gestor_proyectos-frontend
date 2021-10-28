import { types } from "../types/types";

const initialState = {
    projectsQA: []
}

export const projectsQAReducer = ( state= initialState, action) => {
    switch (action.type) {
        case types.projectsQALoaded:
            return {
                ...state,
                projectsQA: [ ...action.payload ]
            }
        default:
            return state;
    }
}
