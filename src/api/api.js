import * as axios from 'axios';

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
