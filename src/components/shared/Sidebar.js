import React from 'react';
import { sideBarData } from './sidebarData';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
    return (
        <aside className="sidebar" >
            <div className="sidebar__logo">
                <img 
                    src="https://res.cloudinary.com/dmfhnhyyj/image/upload/v1632264359/pyjc/P_JC_LOGO_1_hizbhf.png"
                    alt="Logo-PyJC"
                    />
            </div>
            <ul className="sidebar__list" >
                {
                    sideBarData.map( sideItem => {
                        return <SidebarItem key={sideItem.id} { ...sideItem } />
                    })
                }
            </ul>
        </aside>
    );
}
