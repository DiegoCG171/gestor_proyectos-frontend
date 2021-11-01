import React from 'react';
import { useSelector } from 'react-redux';

export const CardAlerts = () => {

    const { resources } = useSelector(state => state.resources);

    return (
        <div className="card-alert">
            <h3 className="card-title">Recursos</h3>
            {
                resources.map(resource => {
                    return (
                        <div
                            key={resource._id}
                            className="card-resources__item"
                        >
                            <p>
                                {`${resource.name} ${resource.surname1} ${resource.surname2}`}
                            </p>
                            <p>
                                { resource.role }
                            </p>
                        </div>)
                })
            }
        </div>
    )
}
