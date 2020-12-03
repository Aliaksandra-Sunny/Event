import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const EventItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 800px;
    height: 171px;
    background-color: #ffffff;
`;

const Info = styled.div`
    overflow-x: auto;
    width: 100%;
    height: 100%;
`;

const StyledImg = styled.img`
    width: 40%;
    height: 100%;
`;

const Title = styled.div`
    font-weight: 900;
    margin: 15px;
`;

const Description = styled.div`
    margin: 15px;
`;

const Date = styled.div`
    margin: 15px;
`;

const EventFeed = props => {

    const { event } = props;
    const { avatar, description, title, start, id, avatarId } = event;
    return (
        <StyledLink to={{
            pathname: '/event',
            state: {
                eventId: id,
                photoId: avatarId,
            },
        }}
        >
            <EventItem>
                <StyledImg src={avatar} alt="EventPhoto" />
                <Info>
                    <Title>
                        {title}
                    </Title>
                    <Description>
                        {description}
                    </Description>
                    <Date>
                        {start}
                    </Date>
                </Info>
            </EventItem>
        </StyledLink>
    );
};
export default EventFeed;
