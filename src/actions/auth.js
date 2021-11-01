import { fetchWithoutToken, fetchWithToken } from "../helpers/fecth"
import { types } from "../types/types";
import { clearedAreas } from "./areas";
import { clearedProjectsQA } from "./projectsQA";
import { clearedResources } from "./resources";
import { finishLoading } from "./ui";


export const startLogin = ( email, password ) => {
    return async( dispatch ) => {
        
        const resp = await fetchWithoutToken('auth', { email, password}, 'POST');
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.user.token );
            localStorage.setItem('token-init-date', new Date().getTime());
            
            dispatch( login({
                uid: body.user.uid,
                name: body.user.name,
                role: body.user.role
            }));
        }

        dispatch( finishLoading());

    }
}


const login = ( data ) => ({ type: types.authLogin, payload: data });

export const startCheckig = () => {
    return async( dispatch ) => {

        const resp = await fetchWithToken('auth/renewToken');
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime());
            
            dispatch( login({
                uid: body.uid,
                name: body.name,
                role: body.role
            }));

        } else {
            dispatch(finishChecking());
        }
    }
}


export const startLogout = () => {
    return async( dispatch ) => {
        localStorage.clear();
        dispatch( clearedAreas() );
        dispatch( clearedProjectsQA() );
        dispatch( clearedResources() );
        dispatch( logout() );
    };
};

export const finishChecking = () => ({ type: types.authCheckingFinish });


const logout = () => ({ type: types.authLogout});
