import { types } from "../types/types";

const initialState = {
    areas: [],
}

export const areasReducer =  ( state= initialState, action ) => {

    switch (action.type) {
        case types.areasLoaded:
            return {
                ...state,
                areas: [ ...action.payload ]
            }
        
        default:
            return state;
    }

}