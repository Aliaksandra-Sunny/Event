import React from 'react';
import styled from 'styled-components';

const MainEventCard = styled.div`
    display: flex;
    justify-content: center;
`;

const EventPhoto = styled.div`
    height: 40px;
    width: 40px;
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
    width: 50px;
    height: 50px;
`;

const SimilarEvent = styled.div``;
const AboutEvent = styled.div``;

const EventCard = props => {

    const { photo, author, title, description, category, start, finish, place } = props;
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
                    {title}
                    {description}
                </EventDescription>
                <EventTimeAndDate>
                    {start}
                    {finish}
                    {place}
                    {category}
                </EventTimeAndDate>
                <EventVizitors>
                    {author.name}
                </EventVizitors>
            </AboutEvent>
        </MainEventCard>
    );
};
export default EventCard;
