import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatedResources, startDeleteResource, startUpdateResource } from '../actions/resources';
import { useForm } from '../hooks/useForm';

export const ResourcesPage = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        _id: new Date(),
        name: '',
        surname1: '',
        surname2: '',
        area: '6171b485e9eaa5ec213e795c',
        role: '',
        subArea: ''
    })

    const { name, surname1, surname2, role } = formValues;

    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const [updatedId, setUpdatedId] = useState('')

    const { resources } = useSelector(state => state.resources)

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(startCreatedResources(formValues))
        setOpenModalCreate(false);
        reset();
    }

    const handleDelete = (id) => {
        dispatch(startDeleteResource(id))
    }

    const handleUpdateModal = (id) => {
        setOpenModalUpdate(true);
        setUpdatedId(id)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(startUpdateResource(updatedId, formValues))
        reset();
        setOpenModalUpdate(false)
    }

    return (
        <div className="crud" >
            <div className="crud-nav" >
                <h2 className="crud-title" >Recursos</h2>
                <button
                    className="crud-button"
                    onClick={() => setOpenModalCreate(true)}
                >
                    Agregar Nuevo Recurso
                </button>
            </div>
            {
                resources.map(resources => {
                    return (
                        <div
                            key={resources._id}
                            className="crud-item"
                        >
                            <div className="crud-item__info" >
                                <p className="crud-item__name" >
                                    {
                                        `${resources.name} ${resources.surname1} ${resources.surname2}`
                                    }
                                </p>
                                <p className="crud-item__leader" >
                                    {
                                        `Area:   ${resources.subArea}`
                                    }
                                </p>
                                <p className="crud-item__percentage" >
                                    {
                                        `Rol:   ${resources.role}`
                                    }
                                </p>
                            </div>
                            <div className="crud-admin">
                                <button
                                    className="crud-update-button"
                                    onClick={() => handleUpdateModal(resources._id)}
                                >
                                    Actualizar
                                </button>
                                <button
                                    className="crud-delete-button"
                                    onClick={() => handleDelete(resources._id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            {
                openModalCreate &&
                <div className="crud-modal-created" >
                    <h2 className="crud-modal__title" >Crear Nuevo Recurso</h2>
                    <form
                        className="crud-modal-form"
                        onSubmit={handleCreate}
                    >
                        <label className='crud-modal__label' >
                            Nombre:
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={name}
                            required
                        />
                        <label className='crud-modal__label' >
                            Apellido1:
                        </label>
                        <input
                            type="text"
                            name="surname1"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={surname1}
                            required
                        />
                        <label className='crud-modal__label' >
                            Apellido2:
                        </label>
                        <input
                            type="text"
                            name="surname2"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={surname2}
                            required
                        />
                        <label className='crud-modal__label' >
                            Rol:
                        </label>
                        <input
                            type="text"
                            name="role"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={role}
                            required
                        />
                        <div className="crud-modal-buttons" >
                            <button
                                className="crud-modal__button-accept"
                                type="submit"
                            >
                                Aceptar
                            </button>
                            <button
                                className="crud-modal__button-cancel"
                                onClick={() => setOpenModalCreate(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            }
            {
                openModalUpdate &&
                <div className="crud-modal-update" >
                    <h2 className="crud-modal__title" >Modificar Recurso</h2>
                    <form
                        className="crud-modal-form"
                        onSubmit={ handleUpdate }
                    >
                        <label className='crud-modal__label' >
                            Nombre:
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={name}
                            required
                        />
                        <label className='crud-modal__label' >
                            Apellido1:
                        </label>
                        <input
                            type="text"
                            name="surname1"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={surname1}
                            required
                        />
                        <label className='crud-modal__label' >
                            Apellido2:
                        </label>
                        <input
                            type="text"
                            name="surname2"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={surname2}
                            required
                        />
                        <label className='crud-modal__label' >
                            Rol:
                        </label>
                        <input
                            type="text"
                            name="role"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={role}
                            required
                        />
                        <div className="crud-modal-buttons" >
                            <button
                                className="crud-modal__button-accept"
                                type="submit"
                            >
                                Actualizar
                            </button>
                            <button
                                className="crud-modal__button-cancel"
                                onClick={() => setOpenModalUpdate(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}
