import React from 'react';
import styled from 'styled-components';
import EventItem from './EventItem/EventItem';

const EventFeedWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 849px;
    height: 100%;
`;

const EventFeed = props => {

    const { events } = props;

    return (
        <EventFeedWrapper>
            {events.map(event => (<EventItem event={event} />))}
        </EventFeedWrapper>
    );
};
export default EventFeed;
