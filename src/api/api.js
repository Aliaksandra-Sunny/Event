import * as axios from 'axios';

const token = localStorage.token;

const instance = axios.create({
    baseURL: 'http://localhost:8081/',
});

const tokenInstance = axios.create({
    baseURL: 'http://localhost:8081/',
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const authAPI = {
    authenticate(email, password) {
        return instance.post('authenticate', { email, password });
    },

    getCurrentUser() {
        return tokenInstance.get('user');
    },

    getCurrentUserInitial(token) {
        return instance.get('user', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};

export const registrationAPI = {
    registration(data) {
        const { email, name, surname, password } = data;
        const requestData = {
            email,
            password,
            name,
            surname,
        };
        return instance.post('registration', requestData);
    },
};

export const eventPageAPI = {
    getEventPhoto(id) {
        return tokenInstance.get(`picture/${id}?format=base64`);
    },

    getEventInfo(id) {
        return tokenInstance.get(`event/${id}`);
    },

    getAllEvents() {
        return tokenInstance.get('events');
    },

    follow(id) {
        return tokenInstance.post(`event/${id}/go`);
    },

    unfollow(id) {
        return tokenInstance.delete(`event/${id}/leave`);
    },

};

export const createEventAPI = {
    createEvent(data) {

        const { title, category, description } = data;

        const requestData = {
            title,
            description,
            category,
        };
        return tokenInstance.post('event', requestData);
    },
};

export const getAllEventsAPI = {
    getAllEvents() {
        return tokenInstance.get('events');
    },

    getAvatarByPhotoId(id) {
        return tokenInstance.get(`picture/${id}?format=base64`);
    },
};
