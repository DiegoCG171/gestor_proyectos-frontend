import { types } from "../types/types";

const initialState = {
    resources: []
}

export const resourcesReducer = ( state = initialState, action) => {

    switch (action.type) {
        case types.resourcesAllLoaded:
            return{
                ...state,
                resources: [ ...action.payload ]
            }
        
        case types.resourcesCleared:
            return {
                ...state,
                resources: []
            }

        case types.resourcesDeleted:
            return {
                ...state,
                resources: state.resources.filter(
                    r => ( r._id !== action.payload )
                )
            }
        case types.resourcesCreated:
            return {
                ...state,
                resources: [
                    ...state.resources,
                    action.payload
                ]
            }
            case types.resourcesUpdated:
                return {
                    ...state,
                    resources: state.resources.map( 
                        r => ( r._id === action.payload._id ) ? action.payload : r 
                    )
                }

        default:
            return state;
    }

}
