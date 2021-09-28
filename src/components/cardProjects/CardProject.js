import React from 'react';
import { CardProjectItem } from './CardProjectItem';

export const CardProject = () => {
    
    const projects = ['a', 'b', 'c'];
    
    return (
        <div className="card-project" >
            <h3 className="card-title">Proyectos</h3>
            {
                projects.map( (item, index) => {
                    return <CardProjectItem key={index} title={item} />
                })
            }
        </div>
    )
}
