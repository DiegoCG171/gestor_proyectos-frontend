import { types } from "../types/types"


export const startLoading = () => {
    return async( dispatch ) => {
        dispatch(loading());
    }
}

const loading = () => ({type: types.uiLoading });

export const finishLoading = () => ({ type: types.uiFinishLoading });