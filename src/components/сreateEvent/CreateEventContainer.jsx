import React from 'react';
import { connect } from 'react-redux';
import CreateEvent from './CreateEvent';
import { createEvent } from '../../redux/reducers/createEventReducer';
import Notifications from '../../common/Notifications';

const CreateEventContainer = props => {

    const { createEvent, eventId } = props;

    return (
        <div>
            <CreateEvent createEvent={createEvent} />
            { eventId ? (
                <Notifications severity="success" text="Event create successful" />
            ) : ''}
        </div>

    );
};
const mapStateToProps = state => {
    return {
        eventId: state.createEvent.id,
    };
};

export default connect(mapStateToProps, {
    createEvent,
})(CreateEventContainer);
