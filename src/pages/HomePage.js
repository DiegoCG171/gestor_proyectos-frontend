import React from 'react'
import { useSelector } from 'react-redux';
import { CardAlerts } from '../components/cardAlerts/CardAlerts';
import { CardAreas } from '../components/CardAreas';
import { CardProject } from '../components/cardProjects/CardProject';

export const HomePage = () => {

    const {areas} = useSelector(state => state.areas);

    areas.sort( (a, b ) => {
        return  b.percentage - a.percentage ;
    });

    return (
        <div className="home" >
            <main className="home-content">
                <h2 className="title" >Áreas</h2>
                <div className="home__areas-list">
                    {
                        areas.map( card => {
                            return <CardAreas key={card._id} {...card} />
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
