import { fetchWithToken } from "../helpers/fecth";
import { types } from "../types/types"

export const areasStartLoading = () => {
    return async( dispatch ) => {

        try {
            
            const resp = await fetchWithToken('areas');
            const body = await resp.json();

            dispatch(areasLoaded( body.areas ));

        } catch (error) {
            console.log(error);
        }

    }
}


const areasLoaded = ( areas ) => ({ 
    type: types.areasLoaded,
    payload: areas
});


export const clearedAreas = () => ({type: types.areasCleared });

export const startDeleteArea = (id) => {
    return async( dispatch ) => {

        // const resp = await fetchWithToken(`areas/${ id }, {}, 'DELETE'`);
        // const body = await resp.json();

        dispatch( areaDeleted(id));
    }
}

const areaDeleted = (id) => ({type: types.areasDeleted, payload: id })

export const startCreatedAreas = (area) => {
    return async( dispatch ) => {
        console.log(area)
        dispatch( areaCreated(area) );
    }
}

const areaCreated = (area) => ({type: types.areasCreated, payload: area})

export const startUpdateArea = ( id, area) => {
    return async( dispatch ) => {
        
        const newAreaUpdated = {
            ...area,
            _id: id,
        }
        dispatch( areaUpdated( newAreaUpdated ) )
    }
}

const areaUpdated = (area) => ({type: types.areasUpdated, payload: area});
