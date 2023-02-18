import React, { useState } from 'react'
import './Sidebar.scss'
import logo from '../../assets/logoRos.svg'
import { useNavigate } from "react-router-dom";

import { SidebarData } from '../../data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'

const Sidebar = () => {

    const navigate = useNavigate();
    const [selected, setSelected] = useState(0)
    const handelSelect = (index, item) => {
        setSelected(index)
        if(item.heading === 'Раздел 1') {
            navigate('/')
        }
        if(item.heading === 'Раздел 2') {
            navigate('/section1')
        }
        if(item.heading === 'Раздел 3') {
            navigate('/section2')
        }
    }

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
                                onClick={() => handelSelect(index, item)}
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