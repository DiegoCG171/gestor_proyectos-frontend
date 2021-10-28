import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';


export const LoginForm = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: "frias.jorge@pyjcsystem.com.mx",
        password: "123456"
    });

    const { email, password } = formValues;

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(startLogin(email, password));
    }

    return (
        <div className="form" >
            <img
                src="https://res.cloudinary.com/dmfhnhyyj/image/upload/v1632264359/pyjc/P_JC_LOGO_1_hizbhf.png"
                alt="Logo-PyJC"
                className="form__logo"
            />
            <h2 className="form__title" >Iniciar sesión</h2>
            <form onSubmit={handleSubmit} >
                <input
                    type="email"
                    className="form__input"
                    name="email"
                    onChange={handleInputChange}
                    value={email}
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="form__input"
                    name="password"
                    onChange={handleInputChange}
                    value={password}
                    placeholder="Contraseña"
                />
                <button
                    className="form__button"
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}
