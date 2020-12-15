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
        userInfo,
        userIds,
    } = props;

    const { state } = location;
    const { eventId, photoId } = state;

    useEffect(() => {
        getEventInfo(eventId, userInfo);
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
                        userInfo={userInfo}
                        userIds={userIds}
                    />
                ) :
                    <LinearProgress color="secondary" />
            }
        </div>

    );
};
const mapStateToProps = state => {
    return {
        userInfo: state.auth.aboutUser,
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
        userIds: state.eventPage.userIds,
    };
};

export default connect(mapStateToProps, {
    getEventPhoto,
    getEventInfo,
    follow,
    unfollow,
})(EventCardContainer);
