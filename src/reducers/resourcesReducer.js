import { types } from "../types/types";

const initialState = {
    resources: [],
}


export const resourcesReducer = (state= initialState, action) => {
    
    switch (action.type) {
        case types.resourcesLoaded:
            return {
                ...state,
                resources: [...action.payload]
            }

        default:
            return state;
    }

}
