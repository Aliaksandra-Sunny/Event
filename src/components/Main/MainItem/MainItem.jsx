import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    height: 90px;
    width: 90px;
    border: 1px red solid;
    text-align: center;
    grid-area: auto;
`;

// eslint-disable-next-line no-unused-vars
const StyledImg = styled.img`
    width: 100%;
    height: 90%;
    top: 0;
    `;

// eslint-disable-next-line no-unused-vars
const Name = styled.span`
    color: white;
    `;

const MainItem = props => {
    const { events } = props;
    return (
        <Item>
            <div>
                {events.id}
            </div>
        </Item>
    );
};

export default MainItem;
