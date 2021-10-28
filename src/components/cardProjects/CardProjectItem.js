import React from 'react'

export const CardProjectItem = ({
    title,
    date
}) => {
    return (
        <div className="card-project__item" >
            <span>{date}</span>
            <span>{title}</span>
            <div className="card-project__graph-wrapper" >
            <svg
                    className="card-project__graph-rail"
                    viewBox="0 0 240 24"
            >
                <rect x="50" y="20"  width="240" height="24"
                    style={{"fill": "var(--gray)"}} />
            </svg>
            <svg
                    className="card-project__graph-bar"
                    viewBox="0 100 240 24"
            >
                <rect x="50" y="20" width="120" height="24"
                    style={{"fill": "var(--green)"}} />
            </svg>
            </div>
        </div>
    )
}
