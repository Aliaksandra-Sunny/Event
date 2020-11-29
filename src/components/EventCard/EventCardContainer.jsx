import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import EventCard from './EventCard';
import { getEventPhoto, getEventInfo } from '../../redux/eventPageReducer';

const EventCardContainer = props => {
    const { getEventPhoto, photo, id, getEventInfo } = props;

    useEffect(() => {
        getEventPhoto();
        getEventInfo();
    }, []);

    return (
        <div>
            {
                photo && id ?
                    <EventCard {...props} /> :
                    <LinearProgress color="secondary" />
            }
        </div>

    );
};
const mapStateToProps = state => {
    return {
        photo: state.eventPage.eventPhoto,
        id: state.eventPage.id,
        title: state.eventPage.title,
        description: state.eventPage.description,
        category: state.eventPage.category,
        start: state.eventPage.start,
        finish: state.eventPage.finish,
        place: state.eventPage.place,
        author: state.eventPage.author,
    };
};

export default connect(mapStateToProps, {
    getEventPhoto,
    getEventInfo,
})(EventCardContainer);
