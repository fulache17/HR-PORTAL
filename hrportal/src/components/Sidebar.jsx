import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaSmileBeam,
    FaSignOutAlt
} from "react-icons/fa";
import { TbCameraSelfie } from "react-icons/tb";
import { FaBusinessTime } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        // Perform logout action here, e.g., clear session/local storage, redirect to login page
        // For now, let's just redirect to the logout path
        history.push("/logout");
    };

    const menuItem = [
        {
            path: "/selfiein",
            name: "SelfieIn",
            icon: <TbCameraSelfie />
        },
        {
            path: "/selfieout",
            name: "SelfieOut",
            icon: <FaSmileBeam />
        },
        {
            path: "/overtime",
            name: "Overtime",
            icon: <FaBusinessTime />
        },
        {
            path: "/logout",
            name: "Logout",
            icon: <FaSignOutAlt />,
            onClick: handleLogout
        }
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "150px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <p style={{ display: isOpen ? "block" : "none" }} className="logo">HR PORTAL</p>
                    <div style={{ marginLeft: isOpen ? "30px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </NavLink>
                ))}

            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
