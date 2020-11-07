import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import event from './../img/Event1.png';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={event}/>
            <div className={style.login}>
               <NavLink to={"/login"}>Войти</NavLink>
            </div>
        </header>
    )
};

export default Header;