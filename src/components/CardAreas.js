import React from 'react'

export const CardAreas = ({
    percentage,
    title,
    subtitle,
    stat
}) => {
    return (
        <div className="card-area" >
            <div className="card-area__graph-wrapper" >
                <p className="card-area__percent" >{percentage}%</p>
                <svg
                    className="card-area__graph-rail"
                    viewBox="0 0 240 240"
                >
                    <circle cx="120" cy="120" r="100" />
                </svg>
                <svg
                    className="card-area__graph-bar"
                    viewBox="0 0 240 240"
                >
                    <circle cx="120" cy="120" r="100" />
                </svg>
            </div>
            <div className="card-area__info">
                <p className="card-area__title">{title}</p>
                <p className="card-area__subtitle" >{subtitle}</p>
                <p className="card-area__stat" >{stat}</p>
            </div>
            <button className="button-outline">Ver todo</button>
        </div>
    )
}
