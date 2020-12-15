import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Profile from './Profile';
import { getProfilePicture, setProfilePicture } from '../../redux/reducers/profileReducer';

const ProfileContainer = props => {
    const history = useHistory();
    const token = localStorage.token;
    if (!token) {
        history.push('/');
        return null;
    }

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
