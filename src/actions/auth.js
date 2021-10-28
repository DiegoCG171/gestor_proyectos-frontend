import { fetchWithoutToken } from "../helpers/fecth"


export const startLogin = ( email, password ) => {
    return async() => {

        const resp = await fetchWithoutToken('auth', { email, password}, 'POST');
        const body = await resp.json();

        console.log(body);
    }
}