import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { sideBarData } from './sidebarData';
import { SidebarItem } from './SidebarItem';
import { startLogout } from '../../actions/auth';

export const Sidebar = () => {
    
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout());
    }

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
            <button 
                className="sidebar__logout"
                onClick={ handleLogout }
            >
                Logout
            </button>
        </aside>
    );
}
