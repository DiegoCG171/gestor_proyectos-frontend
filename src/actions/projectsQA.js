import { fetchWithToken } from "../helpers/fecth";
import { types } from "../types/types"

export const projectsQAStartLoading = () => {
    return async( dispatch ) => {

        try {
            
            const resp = await fetchWithToken('qaProjects');
            const body = await resp.json();

            dispatch( projectsQALoaded( body.projects ));

        } catch (error) {
            console.log(error);
        }

    }
}


const projectsQALoaded = ( projectsQA ) => ({ 
    type: types.projectsQALoaded ,
    payload: projectsQA
});


export const clearedProjectsQA = () => ({type: types.projectsQACleared });

export const startProjectQADelete = (id) => {
    return async( dispatch ) => {
        dispatch( projectsQADeleted(id) )
    }
}

const projectsQADeleted = (id) => ({type: types.projectsQADeleted, payload: id})
