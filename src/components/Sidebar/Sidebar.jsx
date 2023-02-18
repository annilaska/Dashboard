import React, { useState } from 'react'
import './Sidebar.scss'
import logo from '../../assets/logoRos.svg'

import { SidebarData } from '../../data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'

const Sidebar = () => {

    const [selected, setSelected] = useState(0)

    return (
        <div className="Sidebar">
            <div className="Sidebar__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="Sidebar__menu">
                {
                    SidebarData.map((item, index) => {
                        return (
                            <div className={
                                            selected === index
                                            ? "menuItem active"
                                            : "menuItem" 
                                            }
                                key={index}
                                onClick={() => setSelected(index)}
                            >
                                <item.icon />
                                <span>
                                    {item.heading}
                                </span>
                            </div>
                        )
                    })
                }
                <div className="menuItem">
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
    )
}

export default Sidebar