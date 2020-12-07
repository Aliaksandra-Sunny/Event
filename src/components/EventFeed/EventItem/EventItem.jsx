import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 800px;
    color: black;
`;

const EventItem = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px auto;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StyledImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 50%;
    height: 100%;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 900;
    margin: 15px;
`;

const Description = styled.p`
    margin: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    margin: 15px;
`;

const EventFeed = props => {

    const { event } = props;
    const { avatar, description, title, start, id, avatarId } = event;
    const dayOfEvent = moment(start).format('L:');
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
                <StyledImgContainer>
                    <StyledImg src={avatar} alt="EventPhoto" />
                </StyledImgContainer>
                <Info>
                    <Title>
                        {title}
                    </Title>
                    <Description>
                        {description}
                    </Description>
                    <Date>
                        {dayOfEvent}
                    </Date>
                </Info>
            </EventItem>
        </StyledLink>
    );
};
export default EventFeed;
