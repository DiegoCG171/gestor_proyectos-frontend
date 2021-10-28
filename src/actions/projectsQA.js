import { fetchWithToken } from "../helpers/fecth";
import { types } from "../types/types"


export const startProjectsQALoading = () => {
    return async( dispatch ) => {

        try {
            
            const resp = await fetchWithToken('qaProjects');
            const body = await resp.json();

            dispatch(projectsQALoaded(body.projects))

        } catch (error) {
            console.log(error);
        }

    }
}

const projectsQALoaded = ( projects ) => ({
    type: types.projectsQALoaded,
    payload: projects,
})