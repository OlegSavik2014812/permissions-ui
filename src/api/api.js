import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
    }
});
export const usersAPI = {
    getByLogin(login) {
        return instance.get(`/users/user?name=${login}`)
    },
    getUsers() {
        return instance.get('/users')
            .then(response => {
                return response.data;
            })
    },

    deleteById(userId, token) {
        return instance.get(`/users/delete/${userId}`, {
            headers: {
                'Authorization': 'Token_' + token
            }
        })
    }
};
export const authAPI = {
    signIn(login, password) {
        return instance.post(`/users/signIn`, {
                login,
                password
            }
        )
    },
    signUp(login, password) {
        return instance.post('/users/signUp', {
            login, password
        })
    },
};

export const groupAPI = {
    getGroups() {
        return instance.get('/groups');
    },
    findById(id) {
        return instance.get(`/groups/${id}`);
    }
};
export const teethAPI = {
    getUserTeeth(userId) {
        return instance.get(`/teeth/${userId}`);
    }
}