import { fetchWithToken } from "../helpers/fecth";
import { types } from "../types/types"


export const startAreasLoading = () => {
    return async( dispatch ) => {

        try {
            
            const resp = await fetchWithToken('areas');
            const body = await resp.json();

            dispatch(areasLoaded(body.areas))

        } catch (error) {
            console.log(error);
        }

    }
}

const areasLoaded = ( areas ) => ({
    type: types.areasLoaded,
    payload: areas,
})