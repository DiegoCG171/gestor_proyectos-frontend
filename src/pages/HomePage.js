import React from 'react'
import { CardAlerts } from '../components/cardAlerts/CardAlerts';
import { cardAreaData } from '../components/cardAreaData';
import { CardAreas } from '../components/CardAreas';
import { CardProject } from '../components/cardProjects/CardProject';
import { Sidebar } from '../components/shared/Sidebar'

export const HomePage = () => {

    cardAreaData.sort( (a, b ) => {
        return  b.percentage - a.percentage ;
    });

    return (
        <div className="home" >
            <Sidebar />
            <main className="home-content">
                <h2 className="title" >Áreas</h2>
                <div className="home__areas-list">
                    {
                        cardAreaData.map( card => {
                            return <CardAreas key={card.id} {...card} />
                        })
                    }
                </div>
                <section className="home__section">
                    <CardProject />
                    <CardAlerts />
                </section>
            </main>
        </div>
    );
}
