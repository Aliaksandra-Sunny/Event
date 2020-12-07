import React from 'react';
import styled from 'styled-components';
import MainItem from './MainItem/MainItem';
import logos from '../../img/MainLogos/Logos';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FlexContainer = styled.div`
    max-width: 80%;
    display: grid;
    grid-template-areas:
        "first first first" 
        "second second second"
        "third third third";
    grid-template-rows: 90px 90px 90px;
    grid-template-columns: 90px 90px 90px;
    row-gap: 100px;
    grid-gap: 50px;
`;

const Main = () => {
    const logosArray = Object.entries(logos);
    return (
        <Container>
            <FlexContainer>
                {logosArray.map(logo => (<MainItem logo={logo[1]} title={logo[0]} key={logo[0]} />))}
            </FlexContainer>
        </Container>
    );
};

export default Main;
