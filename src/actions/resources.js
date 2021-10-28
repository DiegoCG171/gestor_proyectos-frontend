import { fetchWithToken } from "../helpers/fecth";
import { types } from "../types/types"


export const startResourcesLoading = () => {
    return async( dispatch ) => {

        try {
            
            const resp = await fetchWithToken('resources');
            const body = await resp.json();

            dispatch(resourcesLoaded(body.resources))

        } catch (error) {
            console.log(error);
        }

    }
}

const resourcesLoaded = ( resources ) => ({
    type: types.resourcesLoaded,
    payload: resources,
});