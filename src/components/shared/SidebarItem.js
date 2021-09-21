import React from 'react';
import { FaUsers, FaSuitcase, FaUserTie, FaHome } from 'react-icons/fa';


export const SidebarItem = ({
    icon,
    title
}) => {

    return (
        <div className="sidebar_item" >
            {
                icon === 'home' && <FaHome />
            }
            <p>{title}</p>
        </div>
    )
}
