import { types } from "../types/types";

const initialState = {
    projects: []
}

export const projectsQAReducer = ( state = initialState, action) => {
    
    switch (action.type) {
        case types.projectsQALoaded:
            return {
                ...state,
                projects: [ ...action.payload ]
            }
        
        case types.projectsQACleared:
            return {
                projects: []
            }
            
        case types.projectsQADeleted:
            return {
                ...state,
                projects: state.projects.filter(
                    p => p._id !== action.payload
                )
            }
        
        default:
            return state;
    }

}
