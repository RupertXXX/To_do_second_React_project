import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api-nodejs-todolist.herokuapp.com/',
});

export const authAPI = {
    registerUser(name, email, password, age){
        return instance.post(`user/register`, {
            name: name,
            email: email,
            password: password,
            age: age
        });
    },
    loginUser(email, password) {
        return instance.post(`user/login`, {
            email: email,
            password: password
        });
    },
    logoutUser(token) {
        return instance.post(`user/logout`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    },
}
export const userAPI = {
    getUser(token) {
        return instance.get(`user/me`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            return response;
        });
    },
    updateUser(token, name, email, password, age) {
        return instance.put(`user/me`, {
            name: name,
            email: email,
            password: password,
            age: age
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    },
    setImage(token, image) {
        let formData = new FormData();
        formData.append("avatar", image);

        return instance.post(`user/me/avatar`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            }
        });
    },
    getImage(token) {
        return instance.get(`user/${token}/avatar`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(response => {
            return response;
        });
    },
    deleteImage(token) {
        return instance.delete(`user/me/avatar`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    },
    deleteUser(token) {
        return instance.delete(`user/me`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    },
}
export const notesAPI = {
    getNotes(token, limit=18, skip=0) {
        return instance.get(`task?limit=${limit}&skip=${skip}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            return response;
        });
    },
    getNotesCount(token) {
        return instance.get(`task`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            return response;
        });
    },
    getCompletedNotes(token, limit=18, skip=0, completed) {
        return instance.get(`task?limit=${limit}&skip=${skip}&completed=${completed}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            return response;
        });
    },
    setNote(token, description) {
        return instance.post(`task`, {
                description: description,
            }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    },
    deleteNote(token, id) {
        return instance.delete(`task/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    },
    setComplete(token, id, isComplete) {
        return instance.put(`task/${id}`, {
                completed: isComplete,
            }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    },
}