import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    height: 90px;
    width: 90px;
    border: 1px red solid;
    text-align: center;
    grid-area: auto;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 90%;
    top: 0;
    `;

const Name = styled.span`
    color: white;
    `;

const MainItem = (props) => {
    const {photo} = props;
    return (
        <Item>
            <StyledImg src={photo.src}
                       alt={photo.id}/>
            <Name>{photo.name}</Name>
        </Item>
    );
};

export default MainItem;
