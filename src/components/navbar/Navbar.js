import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';

import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css"
import BtnLanguage from "../btnLanguage/BtnLanguage";


const Navbar = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';
    const [menuOpen, setMenuOpen] = useState(false)
    let language = JSON.parse(localStorage.getItem("language"));


    return (
        <div className="wrapper">

            <div className="header_container">
                <div className="container_header">

                    <div className="header_body">
                        <NavLink to="/" className="logo">Eden Garden</NavLink>
                        <BtnDarkMode />
                        <BtnLanguage />
                        <div className="balck_color"></div>
                        <div className={"header_burger" + (menuOpen ? " open" : "")} onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}
                        >
                            <span>
                            </span>
                        </div>
                        <nav className={"header_menu" + (menuOpen ? " open" : "")}>
                            <ul className={"header_list" + (menuOpen ? " open" : "")}>
                                <li className="header_list_item"><NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}> {language === 'uk' ? 'Головна' : 'Home'} </NavLink></li>
                                <li className="header_list_item"><NavLink to='/gallery' className={({ isActive }) => isActive ? activeLink : normalLink}> {language === 'uk' ? 'Галерея' : 'Gallery'} </NavLink></li>
                                <li className="header_list_item"><NavLink to='/services' className={({ isActive }) => isActive ? activeLink : normalLink}> {language === 'uk' ? 'Послуги' : 'Services'} </NavLink></li>
                                <li className="header_list_item"><NavLink to='/contacts' className={({ isActive }) => isActive ? activeLink : normalLink}> {language === 'uk' ? 'Контакти' : 'Contacts'} </NavLink></li>

                            </ul>
                        </nav>


                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;