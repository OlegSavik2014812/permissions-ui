import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
    }
});
export const usersAPI = {
    getUsers() {
        return instance.get('/users')
            .then(response => {
                debugger;
                return response.data;
            })
    },

    deleteById(userId, token) {
        debugger;
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
}