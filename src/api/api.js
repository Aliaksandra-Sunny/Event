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
    getEventPhoto() {
        return tokenInstance.get('picture/40?format=base64');
    },
    getEventInfo() {
        return tokenInstance.get('event/24');
    },
    getAllEvents() {
        return tokenInstance.get('events');
    },
};
