import { fetchWithoutToken, fetchWithToken } from "../helpers/fecth"
import { types } from "../types/types";


export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchWithoutToken('auth', { email, password}, 'POST');
        const body = await resp.json();

        if(body.ok) {
            localStorage.setItem('token', body.user.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( login({
                uid: body.user.uid,
                name: body.user.name,
            }) )
        }
    }
};

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

export const startChecking = () => {
    return async( dispatch ) => {

        const resp = await fetchWithToken('auth/renewToken');
        const body = await resp.json();

        if(body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( login({
                    uid: body.uid,
                    name: body.name,
                })
            );
        } else {
            dispatch( chekingFinish());
        }
    }
}

const chekingFinish = () => ({ type: types.authCheckingFinish });

export const startLogout = () => {
    return (dispatch) => {

        localStorage.clear();

        dispatch(logout());
    }
}

const logout = () => ({ type: types.authLogout });