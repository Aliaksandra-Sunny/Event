import React from 'react';
import styled from 'styled-components';

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
        <Item>
            <StyledImg src={logo} alt="Main Logo" />
            <Title>
                {title}
            </Title>
        </Item>
    );
};

export default MainItem;
