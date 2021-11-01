import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startProjectQADelete } from '../actions/projectsQA';

export const ProjectsQAPage = () => {

    const dispatch = useDispatch();

    const { projects } = useSelector(state => state.projectsQA)

    const handleDelete = ( id ) => {
        dispatch( startProjectQADelete(id) )
    }

    return (
        <div className="crud" >
            <div className="crud-nav" >
                <h2 className="crud-title" >Projectos QA</h2>
                <button
                    className="crud-button"
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
        </div>
    )
}
