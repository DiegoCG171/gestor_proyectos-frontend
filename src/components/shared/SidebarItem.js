import React from 'react';
import { FaUsers, FaSuitcase, FaUserTie, FaHome } from 'react-icons/fa';


export const SidebarItem = ({
    icon,
    title
}) => {

    return (
        <div className="sidebar__item" >
            {
                icon === 'home' ? <FaHome className='sidebar__item-icon'/> :
                icon === 'users' ? <FaUsers className='sidebar__item-icon' /> :
                icon === 'suitcase' ? <FaSuitcase className='sidebar__item-icon' /> : 
                <FaUserTie className='sidebar__item-icon' /> 
            }
            <p className='sidebar__item-title' >{title}</p>
        </div>
    )
}
