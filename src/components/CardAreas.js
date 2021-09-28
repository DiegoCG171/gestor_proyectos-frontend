import React, { useEffect, useState } from 'react';

export const CardAreas = ({
    percentage,
    title,
    subtitle,
    stat
}) => {

    const [currentPercentage, setcurrentPercentage] = useState(628);
    const [counterPercentage, setcounterPercentage] = useState(0);


    useEffect(() => {
        setcurrentPercentage( 628 - (628 * (percentage / 100)) );
    }, []);

    

    let color;

    if( currentPercentage >= 420.76 ){
        color = 'var(--red)';
    } else if( currentPercentage < 420.76 && currentPercentage >= 214.53 ){
        color = 'var(--yellow)';
    } else {
        color = 'var(--green)';
    }


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
                    <circle 
                        cx="120" 
                        cy="120" 
                        r="100" 
                        style={{'strokeDashoffset': currentPercentage, 'stroke':  color}}
                    />
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
