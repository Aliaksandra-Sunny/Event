import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useHistory } from 'react-router';
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

const LogoutButton = styled.button`
    margin: 10px 0 0 15px;
    height: 30px;
`;

const UserPhoto = styled.img`
    border-radius: 100%;
    margin: 5px 10px;
    height: 40px;
    width: 40px;
`;

const Header = props => {
    const history = useHistory();

    const { userInfo, userImg, token, logout } = props;
    return (
        <header className={style.header}>
            <StyledLink to="/">
                <img src={event} alt="HeaderImg" />
            </StyledLink>
            <div className={style.login}>
                {
                    token && userInfo ? (
                        <StyledLink to="/profile">
                            <User>
                                <UserPhoto src={userImg || userPhoto} />
                                <UserName>{userInfo.name}</UserName>
                                <LogoutButton onClick={() => {
                                    localStorage.removeItem('token');
                                    history.push('/');
                                    logout();
                                }}
                                >
                                    Logout
                                </LogoutButton>
                            </User>
                        </StyledLink>
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
