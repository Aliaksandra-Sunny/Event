import React from 'react';
import styled from 'styled-components';
import MainItem from './MainItem/MainItem';

const Container = styled.div`
    width: 100%;
    height: 100%;
    border: 1px white solid;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FlexContainer = styled.div`
    max-width: 80%;
    border: 1px white solid;
    display: grid;
    grid-template-areas:
        "first first first" 
        "second second second"
        "third third third";
    grid-template-rows: 90px 90px 90px;
    grid-template-columns: 90px 90px 90px;
    row-gap: 70px;
    grid-gap: 70px;
`;

const Main = props => {
    const { events } = props;
    return (
        <Container>
            <FlexContainer>
                {events.map(events => (<MainItem events={events} />))}
            </FlexContainer>

        </Container>
    );
};

export default Main;
