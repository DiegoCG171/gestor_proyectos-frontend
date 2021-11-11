import React, { useEffect, useState } from 'react'

export const CardProjectItem = ({
    code,
    name,
    percentage
}) => {

    const [currentPercentage, setCurrentPercentage] = useState(0);

    useEffect(()=>{
        setCurrentPercentage(percentage);
    },[percentage])

    let color = '';

    if (currentPercentage <= 35 ) {
        color = 'var(--red)';
    } else if (currentPercentage > 45 && currentPercentage <= 70 ) {
        color = 'var(--yellow)';
    } else {
        color = 'var(--green)';
    }

    return (
        <div className="card-project__item" >
<<<<<<< HEAD
            <div className="card-project__item-info" >
                <p className="card-project__item-code" >{code}</p>
                <p className="card-project__item-name" >{name}</p>
            </div>
            <div className="card-project__item-rail" >
                <div className="card-project__item-bar" style={{ width: `${currentPercentage}%`, backgroundColor: color }} />
            </div>
            <small className="card-project__item-percentage" >{ percentage }%</small>
=======
            <span>{date}</span>
            <span>{title}</span>
>>>>>>> main
        </div>
    )
}
