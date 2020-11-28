import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import EventCard from './EventCard';
import { getEventInfo } from '../../redux/eventPageReducer';

const EventCardContainer = props => {
    const { getEventInfo, photo } = props;

    useEffect(() => {
        getEventInfo();
    }, []);

    return (
        <div>
            {
                photo ?
                    <EventCard photo={photo} /> :
                    <LinearProgress color="secondary" />
            }
        </div>

    );
};
const mapStateToProps = state => {
    return {
        photo: state.eventPage.eventPhoto,
    };
};

export default connect(mapStateToProps, {
    getEventInfo,
})(EventCardContainer);
