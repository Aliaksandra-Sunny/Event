import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import style from './Header.module.css';
import event from '../../img/Event1.png';
import userPhoto from '../../img/UserImg.png';

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

const User = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: row;
    color: white;
`;
const UserName = styled.p`
    color: white;
`;

const UserPhoto = styled.img`
    border-radius: 100%;
    margin: 5px 10px;
    height: 40px;
    width: 40px;
`;

const Header = props => {

    const { userInfo, token } = props;
    return (
        <header className={style.header}>
            <StyledLink to="/">
                <img src={event} alt="HeaderImg" />
            </StyledLink>
            <div className={style.login}>
                {
                    token && userInfo ? (
                        <User>
                            <UserPhoto src={userPhoto} />
                            <UserName>{userInfo.name}</UserName>
                        </User>
                    ) : (
                        <div>
                            <SignIn>
                                <StyledNavLink to="/login">Sign in</StyledNavLink>
                            </SignIn>
                            <span>
                                <StyledNavLink to="/registration">Registration</StyledNavLink>
                            </span>
                            <SignIn />
                        </div>
                    )
                }
            </div>
        </header>

    );
};

export default Header;
