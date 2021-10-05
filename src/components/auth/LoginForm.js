import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';


export const LoginForm = () => {


    const [formValues, handleInputChange] = useForm({
        email: 'test@gmail.com',
        password: '12345678'
    });

    const { email, password } = formValues;

    const handleSubmit = (event) => {
        event.preventDefault();
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
                <Link
                    to="/home"
                    className="form__button"
                >
                    Ingresar
                </Link>
            </form>
        </div>
    )
}
