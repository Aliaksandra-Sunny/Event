import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import style from './Header.module.css';
import event from '../../img/Event1.png';

const SignIn = styled.span`
    margin-right: 30px;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;

const Header = () => {
    return (
        <header className={style.header}>
            <StyledLink to="/main">
                <img src={event} alt="HeaderImg" />
            </StyledLink>
            <div className={style.login}>
                <SignIn>
                    <StyledNavLink to="/login">Sign in</StyledNavLink>
                </SignIn>
                <span>
                    <StyledNavLink to="/registration">Registration</StyledNavLink>
                </span>
            </div>
        </header>
    );
};

export default Header;
