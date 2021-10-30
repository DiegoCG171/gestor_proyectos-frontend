import { fetchWithoutToken, fetchWithToken } from "../helpers/fecth"
import { types } from "../types/types";


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
        }

    }
}