import React from 'react'

export const CardProjectItem = ({
    title,
    date
}) => {
    return (
        <div className="card-project__item" >
            <span>{date}</span>
            <span>{title}</span>
        </div>
    )
}
