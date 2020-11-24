import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import event from '../img/Event1.png';

const Header = () => {
    return (
        <header className={style.header}>
            <img src={event} alt="HeaderImg" />
            <div className={style.login}>
                <NavLink to="/login">Войти</NavLink>
            </div>
        </header>
    );
};

export default Header;
