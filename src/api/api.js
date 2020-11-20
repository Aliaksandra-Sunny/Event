import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8081/"
});

export const authAPI = {
    authenticate(email, password) {
        return instance.post(
            `authenticate`,
            {'email': email, 'password': password}
            )
    },
};

