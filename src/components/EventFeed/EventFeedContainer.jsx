import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import EventFeed from './EventFeed';
import { getAllEvents } from '../../redux/reducers/eventFeedReducer';

const EventFeedContainer = props => {

    const { getAllEvents, events } = props;

    useEffect(() => {
        getAllEvents();
    }, []);

    return (
        <div>
            {
                events ?
                    <EventFeed events={events} /> :
                    <LinearProgress color="secondary" />
            }
        </div>

    );
};

const mapStateToProps = state => {
    return {
        events: state.getAllEvents.events,
    };
};

export default connect(mapStateToProps, {
    getAllEvents,
})(EventFeedContainer);
