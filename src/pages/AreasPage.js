import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatedAreas, startDeleteArea, startUpdateArea } from '../actions/areas';
import { useForm } from '../hooks/useForm';

export const AreasPage = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        _id: new Date(),
        name: '',
        leader: '',
        percentage: 0
    })

    const { name, leader, percentage } = formValues;

    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const [updatedId, setUpdatedId] = useState('')

    const { areas } = useSelector(state => state.areas);

    const handleCreate = (e) => {
        e.preventDefault();
        setOpenModalCreate(false);
        dispatch(startCreatedAreas(formValues))
        reset();
    }

    const handleDelete = (id) => {
        dispatch(startDeleteArea(id))
    }

    const handleUpdateModal = (id) => {
        setOpenModalUpdate(true);
        setUpdatedId(id)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch( startUpdateArea( updatedId, formValues ) )
        reset();
        setOpenModalUpdate(false)
    }

    return (
        <div className="crud" >
            <div className="crud-nav" >
                <h2 className="crud-title" >Áreas</h2>
                <button
                    className="crud-button"
                    onClick={() => setOpenModalCreate(true)}
                >
                    Agregar Nueva Area
                </button>
            </div>
            {
                areas.map(area => {
                    return (
                        <div
                            key={area._id}
                            className="crud-item"
                        >
                            <div className="crud-item__info" >
                                <p className="crud-item__name" >
                                    {
                                        area.name
                                    }
                                </p>
                                <p className="crud-item__leader" >
                                    {
                                        `Lider:   ${area.leader}`
                                    }
                                </p>
                                <p className="crud-item__percentage" >
                                    {
                                        `Porcetange:   ${area.percentage}%`
                                    }
                                </p>
                            </div>
                            <div className="crud-admin">
                                <button
                                    className="crud-update-button"
                                    onClick={() => handleUpdateModal(area._id)}
                                >
                                    Actualizar
                                </button>
                                <button
                                    className="crud-delete-button"
                                    onClick={() => handleDelete(area._id)}
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
                            Nombre del Área:
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
                            Lider del Área:
                        </label>
                        <input
                            type="text"
                            name="leader"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={leader}
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
                            Nombre del Área:
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
                            Lider del Área:
                        </label>
                        <input
                            type="text"
                            name="leader"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={leader}
                            required
                        />
                        <input
                            type="range"
                            name="percentage"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={percentage}
                            min="0" max="100"
                            required
                        />
                        <span className="crud-modal__label" >{percentage} %</span>
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
