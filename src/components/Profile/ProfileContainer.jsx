import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfilePicture, setProfilePicture } from '../../redux/reducers/profileReducer';

const ProfileContainer = props => {

    const { userInfo, getProfilePicture, profilePicture, setProfilePicture } = props;
    const { avatarId } = userInfo;

    useEffect(() => {
        if (avatarId) {
            getProfilePicture(avatarId);
        }
    }, []);

    return (
        <div>
            <Profile profilePicture={profilePicture} setProfilePicture={setProfilePicture} />
        </div>

    );

};

const mapStateToProps = state => {
    return {
        userInfo: state.auth.aboutUser,
        profilePicture: state.profile.ProfileImage,
    };
};

export default connect(mapStateToProps, {
    getProfilePicture, setProfilePicture,
})(ProfileContainer);
