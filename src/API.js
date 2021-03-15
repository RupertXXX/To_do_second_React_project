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
    updateUser(name, email, password, age) {
        return instance.put(`user/me`, {
            name: name,
            email: email,
            password: password,
            age: age
        });
    },
    setImage(image) {
        let formData = new FormData();
        formData.append("image", image);

        return instance.post(`user/me/avatar`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }}
        );
    },
    getImage() {
        return instance.get(`user/5ddccbec6b55da001759722c/avatar`)
        .then(response => {
            return response;
        });
    },
    deleteImage() {
        return instance.delete(`user/me/avatar`);
    },
    deleteUser() {
        return instance.delete(`user/me/avatar`);
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



export const settingsAPI = {
    setPhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }}
        )
        .then(response => {
            return response.data;
        });
    },
    setProfileInfo(allData) {
        return instance.put(`profile`, allData).then(response => response.data)
    },
}