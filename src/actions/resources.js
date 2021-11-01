import { fetchWithToken } from "../helpers/fecth";
import { types } from "../types/types"

export const resourcesAllStartLoading = () => {
    return async( dispatch ) => {

        try {
            
            const resp = await fetchWithToken('resources');
            const body = await resp.json();

            dispatch( resourcesAllLoaded( body.resources ));

        } catch (error) {
            console.log(error);
        }
    }
}


const resourcesAllLoaded = ( resources ) => ({ 
    type: types.resourcesAllLoaded,
    payload: resources
});


export const clearedResources = () => ({type: types.resourcesCleared });

export const startDeleteResource = ( id ) => {
    return async( dispatch ) => {

        dispatch(resourcesDeleted(id))

    }
}

const resourcesDeleted = (id) => ({type: types.resourcesDeleted, payload: id})

export const startCreatedResources = (resource) => {
    return async( dispatch ) => {
        console.log(resource)
        dispatch( resourcesCreated( resource ));
    }
}

const resourcesCreated = (resource) => ({type: types.resourcesCreated, payload: resource})

export const startUpdateResource = ( id, resource) => {
    return async( dispatch ) => {
        
        const newResourceUpdated = {
            ...resource,
            _id: id,
        }
        dispatch( resourceUpdated( newResourceUpdated ) )
    }
}

const resourceUpdated = (resource) => ({type: types.resourcesUpdated, payload: resource})