import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useLocation } from 'react-router-dom';
import EventCard from './EventCard';
import { getEventPhoto, getEventInfo, follow, unfollow } from '../../redux/reducers/eventPageReducer';

const EventCardContainer = props => {
    const location = useLocation();
    const {
        getEventPhoto,
        photo,
        id,
        getEventInfo,
        author,
        description,
        category,
        start,
        finish,
        place,
        followed,
        follow,
        unfollow,
    } = props;

    const { state } = location;
    const { eventId, photoId } = state;

    useEffect(() => {
        getEventPhoto(photoId);
        getEventInfo(eventId);
    }, []);

    return (
        <div>
            {
                photo && id ? (
                    <EventCard
                        photo={photo}
                        author={author}
                        description={description}
                        category={category}
                        start={start}
                        finish={finish}
                        place={place}
                        followed={followed}
                        follow={follow}
                        unfollow={unfollow}
                        eventId={eventId}
                    />
                ) :
                    <LinearProgress color="secondary" />
            }
        </div>

    );
};
const mapStateToProps = state => {
    return {
        followed: state.eventPage.followed,
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
    follow,
    unfollow,
})(EventCardContainer);
