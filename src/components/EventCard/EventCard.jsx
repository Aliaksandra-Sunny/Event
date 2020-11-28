import React from 'react';
import styled from 'styled-components';

const MainEventCard = styled.div`
    display: flex;
    justify-content: center;
`;

const EventPhoto = styled.div`
    height: 345px;
    width: 728px;
`;

const EventDescription = styled.div`
    height: 199px;
    width: 728px;
`;

const EventTimeAndDate = styled.div`
    height: 199px;
    width: 728px;
`;

const EventVizitors = styled.div`
    height: 70px;
    width: 728px;
`;

const StyledImg = styled.img`
    
`;

const SimilarEvent = styled.div``;
const AboutEvent = styled.div``;

const EventCard = props => {

    const { photo } = props;

    return (
        <MainEventCard>
            <SimilarEvent>
                Похожие мероприятия
            </SimilarEvent>
            <AboutEvent>
                <EventPhoto>
                    <StyledImg src={`${photo}`} alt="EventPhoto" />
                </EventPhoto>
                <EventDescription>
                    Описание
                </EventDescription>
                <EventTimeAndDate>
                    Дата и время
                </EventTimeAndDate>
                <EventVizitors>
                    Посетители
                </EventVizitors>
            </AboutEvent>
        </MainEventCard>
    );
};
export default EventCard;
