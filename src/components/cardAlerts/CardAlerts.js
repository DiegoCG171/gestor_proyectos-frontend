import React from 'react';
import { cardAlertsData } from './cardAlertsData';
import { CardAlertsItem } from './CardAlertsItem';

export const CardAlerts = () => {
    return (
        <div className="card-alert">
            <h3 className="card-title">Alertas</h3>
            {

                cardAlertsData.map( alerts =>  {
                    return <CardAlertsItem key={alerts.id} { ...alerts } />
                })
            }
        </div>
    )
}
