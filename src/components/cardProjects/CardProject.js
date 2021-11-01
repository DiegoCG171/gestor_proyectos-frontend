import React from 'react';
import { useSelector } from 'react-redux';
import { CardProjectItem } from './CardProjectItem';

export const CardProject = () => {
    
    const { projects } = useSelector(state => state.projectsQA)

    return (
        <div className="card-project" >
            <h3 className="card-title">Proyectos</h3>
            {
                projects.map( project => {
                    return ( <CardProjectItem key={project._id} { ...project } /> )
                })
            }
        </div>
    )
}
