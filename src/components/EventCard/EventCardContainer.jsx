import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useLocation } from 'react-router-dom';
import EventCard from './EventCard';
import { getEventPhoto, getEventInfo, follow, unfollow } from '../../redux/reducers/eventPageReducer';
import EventImg from '../../img/EventPhoto.jpg';

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
        follow,
        unfollow,
        followed,
        userId,
    } = props;

    const { state } = location;
    const { eventId, photoId } = state;

    useEffect(() => {
        getEventInfo(eventId);
        getEventPhoto(photoId);
    }, []);

    return (
        <div>
            {
                (photo || EventImg) && id ? (
                    <EventCard
                        EventImg={EventImg}
                        photo={photo}
                        author={author}
                        description={description}
                        category={category}
                        start={start}
                        finish={finish}
                        place={place}
                        eventId={eventId}
                        follow={follow}
                        unfollow={unfollow}
                        followed={followed}
                        userId={userId.id}
                    />
                ) :
                    <LinearProgress color="secondary" />
            }
        </div>

    );
};
const mapStateToProps = state => {
    return {
        userId: state.auth.aboutUser,
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
