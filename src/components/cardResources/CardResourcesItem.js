import React from 'react'

export const CardResourcesItem = (
    name,
    role
) => {
    return (
        <div className="card-resources__item" >
            <div className="card-resources__item-info" >
                <p className="card-resources__item-name" >{name}</p>
            </div>
            <small className="card-resources__item-role" >{ role }</small>
        </div>
    )
}
