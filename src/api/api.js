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
    },
    getById(id) {
        return instance.get(`/users/${`${id}`}`)
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
        return instance.get(`/user_teeth/${userId}`);
    },
    getToothById(toothId) {
        return instance.get(`/teeth/${toothId}`)
    },
    getUserToothById(toothId) {
        return instance.get(`/user_teeth?id=${toothId}`)
    },
    postUserTooth(userId, toothNumber, complaints, treatments) {
        return instance.post(`/user_teeth`, {
            userId, toothNumber, complaints, treatments
        })
    },
    postComplaint(userToothId, description) {
        return instance.post('/user_teeth/complain', {
            userToothId, description
        })
    },
    postTreatment(userToothId, description, price) {
        return instance.post('/user_teeth/treat', {
            userToothId, description, price
        })
    }
};