import React from 'react';
import { useSelector } from 'react-redux';
import { CardProjectItem } from './CardProjectItem';

export const CardProject = () => {
    
    const {projectsQA} = useSelector(state => state.projectsQA)
    
    return (
        <div className="card-project" >
            <h3 className="card-title">Proyectos</h3>
            {
                projectsQA.map( projects => {
                    return <CardProjectItem key={projects._id} title={projects.code} />
                })
            }
        </div>
    )
}
