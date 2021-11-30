import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startProjectQADelete } from '../actions/projectsQA';
import DateTimePicker from 'react-datetime-picker';
import { useForm } from '../hooks/useForm';
import moment from 'moment';


const startDate = moment().minutes(0).seconds(0);


export const ProjectsQAPage = () => {

    const dispatch = useDispatch();
    const [openModalCreate, setOpenModalCreate] = useState(false);

    const { projects } = useSelector(state => state.projectsQA);

    const [ formValues, handleInputChange, reset ] = useForm({
        name: '',
        code: '',
        pm: '',
        designer: '',
        leader: '',
        percentage: '',
    });

    const { name, code, pm, designer, leader, percentage } = formValues;

    const handleDelete = ( id ) => {
        dispatch( startProjectQADelete(id) );
    }

    const handleCreate = () => {

    }

    const handleChangeDate = (e) => {
    }

    return (
        <div className="crud" >
            <div className="crud-nav" >
                <h2 className="crud-title" >Projectos QA</h2>
                <button
                    className="crud-button"
                    onClick={ () => setOpenModalCreate( true )}
                >
                    Agregar Nuevo Projecto
                </button>
            </div>
            {
                projects.map( project => {
                    return (
                        <div
                            key={project._id}
                            className="crud-item"
                        >
                            <div className="crud-item__info-project" >
                                <p className="crud-item__code-project" >
                                    {
                                        `${project.code}` 
                                    }
                                </p>
                                <p className="crud-item__code-project" >
                                    {
                                        project.name  
                                    }
                                </p>
                                <p className="crud-item__project-text" >
                                    {
                                        `PM:   ${ project.pm }` 
                                    }
                                </p>
                                <p className="crud-item__project-text" >
                                    {
                                        `Diseñador:   ${ project.designer }` 
                                    }
                                </p>
                                <p className="crud-item__project-text" >
                                    {
                                        `Lider:   ${ project.leader }` 
                                    }
                                </p>
                                <p className="crud-item__project-text" >
                                    {
                                        `Porcentaje:   ${ project.percentage }%` 
                                    }
                                </p>
                            </div>
                            <div className="crud-admin">
                                <button className="crud-update-button">
                                    Actualizar
                                </button>
                                <button 
                                    className="crud-delete-button"
                                    onClick={ () => handleDelete(project._id)}
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
                <div 
                    className="modal"
                >
                    <h2 className="modal-title" >Crear Nuevo Projecto</h2>
                    <div className="modal-separator"></div>
                    <form
                        className="crud-modal-form"
                        onSubmit={handleCreate}
                        autoComplete="off"
                    >
                        <label className='crud-modal__label' >
                            Clave del Projecto:
                        </label>
                        <input
                            type="text"
                            name="code"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={code}
                            required
                        />
                        <label className='crud-modal__label' >
                            Nombre del Projecto:
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
                            Fecha Inicio:
                        </label>
                        <DateTimePicker
                            onChange={ handleChangeDate }
                            value={startDate.toDate()}
                            disableClock={true}
                            amPmAriaLabel='Select AM/PM'
                            minutePlaceholder="mm"
                            format="h:mm:ss a"
                        />
                        <label className='crud-modal__label' >
                            Diseñador:
                        </label>
                        <input
                            type="text"
                            name="designer"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={designer}
                            required
                        />
                        <label className='crud-modal__label' >
                            Lider:
                        </label>
                        <input
                            type="text"
                            name="leader"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={leader}
                            required
                        />
                        <label className='crud-modal__label' >
                            Porcentaje:
                        </label>
                        <input
                            type="text"
                            name="percentage"
                            className="crud-modal__input"
                            onChange={handleInputChange}
                            value={percentage}
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
        </div>
    )
}
