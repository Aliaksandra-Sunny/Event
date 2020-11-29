import * as axios from 'axios';

const token = localStorage.token;

const instance = axios.create({
    baseURL: 'http://localhost:8081/',
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
        return instance.get('picture/25?format=base64', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    getEventInfo() {
        return instance.get('event/24', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};

export const eventAPI = {
    mainMenu(){
        return instance.get('main')
    }
}
