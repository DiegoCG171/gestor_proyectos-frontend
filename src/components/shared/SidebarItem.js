import React from 'react';
import { FaUsers, FaSuitcase, FaUserTie, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const SidebarItem = ({
    icon,
    title,
    link,
}) => {

    return (
        <Link className="sidebar__item" to={link} >
            {
                icon === 'home' ? <FaHome className='sidebar__item-icon'/> :
                icon === 'users' ? <FaUsers className='sidebar__item-icon' /> :
                icon === 'suitcase' ? <FaSuitcase className='sidebar__item-icon' /> : 
                <FaUserTie className='sidebar__item-icon' /> 
            }
            <p className='sidebar__item-title' >{title}</p>
        </Link>
    )
}
