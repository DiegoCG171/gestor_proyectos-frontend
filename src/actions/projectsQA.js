import { fetchWithToken } from "../helpers/fecth";
import { types } from "../types/types"

export const projectsQAStartLoading = () => {
    return async( dispatch ) => {

        try {
            
            //TODO: cambiar endpoint
            const resp = await fetchWithToken('qaProjectsTemp');
            const body = await resp.json();

            dispatch( projectsQALoaded( body.projects ));

        } catch (error) {
            console.log(error);
        }

    }
}

export const startProjectsCreated = (project) => {
    return async( dispatch ) => {
        try {
            
            const resp = await fetchWithToken('qaProjectsTemp', project, 'POST');
            const body = await resp.json();

            project = {
                _id: body.project._id,
                ...project
            }

            dispatch(projectCreated( project ))

        } catch (error) {
            console.log(error);
        }
    }
}

const projectCreated = ( project ) => ({type: types.projectsQACreated, payload: project})


const projectsQALoaded = ( projectsQA ) => ({ 
    type: types.projectsQALoaded ,
    payload: projectsQA
});


export const clearedProjectsQA = () => ({type: types.projectsQACleared });

export const startProjectQADelete = (id) => {
    return async( dispatch ) => {

        const resp = await fetchWithToken(`qaProjectsTemp/${id}`, {} ,'DELETE');
        const body = await resp.json();

        console.log(body);

        dispatch( projectsQADeleted(id) )
    }
}

const projectsQADeleted = (id) => ({type: types.projectsQADeleted, payload: id})