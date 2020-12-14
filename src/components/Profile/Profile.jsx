import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileImageWrapper = styled.div`
    border 1px solid white;
    width: 150px;
    height: 150px;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Profile = props => {

    const { profilePicture, setProfilePicture } = props;

    const [picture, setPicture] = useState(null);
    const [pictureDisplay, setPictureDisplay] = useState(null);

    const onChangePicture = e => {
        setPicture(e.target.files[0]);
        setPictureDisplay(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <ProfileWrapper>
            <form>
                <ProfileImageWrapper>
                    <ProfileImage src={pictureDisplay || profilePicture} alt="Profile Photo" />
                    <input id="profilePic" type="file" onChange={onChangePicture} />
                    <button
                        type="submit"
                        onClick={e => {
                            e.preventDefault();
                            setProfilePicture(picture);
                        }}
                    >
                        Upload picture
                    </button>
                </ProfileImageWrapper>
            </form>
        </ProfileWrapper>

    );

};

export default Profile;
