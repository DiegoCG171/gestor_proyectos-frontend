import { types } from "../types/types";

const initialState = {
    areas: []
}

export const areasReducer = ( state = initialState, action) => {
    
    switch ( action.type ) {
        case types.areasLoaded:
            return {
                ...state,
                areas: [...action.payload]
            }
        case types.areasCleared:
            return {
                areas: []
            }

        case types.areasDeleted:
            console.log('delete action', action.payload)
            return {
                ...state,
                areas: state.areas.filter(
                    area => ( area._id !== action.payload )
                )
            }
        case types.areasCreated:
            return {
                ...state,
                areas: [
                    ...state.areas,
                    action.payload
                ]
            }
        case types.areasUpdated:
            return {
                ...state,
                areas: state.areas.map( 
                    a => ( a._id === action.payload._id ) ? action.payload : a 
                )
            }
        default:
            return state;
    }

}
