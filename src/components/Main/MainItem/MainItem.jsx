import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const Item = styled.div`
    height: 120px;
    width: 120px;
    text-align: center;
    grid-area: auto;
`;
const StyledImg = styled.img`
    width: 100%;
    height: 90%;
    top: 0;
    `;

const Title = styled.div`
    color: white;
`;

const MainItem = props => {
    const { logo, title } = props;
    return (
        <StyledLink to={{ pathname: '/feed' }}>
            <Item>
                <StyledImg src={logo} alt="Main Logo" />
                <Title>
                    {title}
                </Title>
            </Item>
        </StyledLink>

    );
};

export default MainItem;
