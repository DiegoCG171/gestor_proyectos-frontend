import React from 'react';

export const CardAlertsItem = ({
    status,
    code,
    title,
    lateness
}) => {

    let color = null;
    
    if( status === 'danger' ){
        color = 'var(--red)';
    } else if( status === 'warning' ){
        color = 'var(--yellow)';
    } else {
        color = 'var(--green)';
    }

    return (
        <div className="card-alert__item" style={{ borderColor: color }}>
            <div className="card-alert__color" style={{ backgroundColor: color }}  />
            <div className="card-alert__info">
                <p className="card-alert__code" >{ code }</p>
                <p className="card-alert__title" >{ title }</p>
            </div>
            <p className="card-alert__retraso" >Retraso: { lateness } días</p>
        </div>
    )
}
