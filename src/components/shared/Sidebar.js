import React from 'react';
import { sideBarData } from './sidebarData';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
    return (
        <div className="sidebar" >
            <div className="sidebar__logo">
                <img src="https://res.cloudinary.com/dmfhnhyyj/image/upload/v1632264359/pyjc/P_JC_LOGO_1_hizbhf.png" />
            </div>
            {
                sideBarData.map( sideItem => {
                    return <SidebarItem key={sideItem.id} { ...sideItem } />
                })
            }
        </div>
    );
}
