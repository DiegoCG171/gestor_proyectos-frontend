import React from 'react'
import { cardAreaData } from '../components/cardAreaData';
import { CardAreas } from '../components/CardAreas';
import { Sidebar } from '../components/shared/Sidebar'

export const HomePage = () => {
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
            </main>
        </div>
    );
}
