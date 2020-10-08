import axios from "axios";
import cookie from 'react-cookies'

const domain = process.env.REACT_APP_BACKEND_URL;
const token = cookie.load('access_token');
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
}
const Auth = {
    current: () =>
        axios.get(`${domain}/api/users/me`, { headers: headers }),
    login: (email, password) =>
        axios.post(`${domain}/api/auth/login`, { email, password }),
    register: (firstName, lastName, email, password) =>
        axios.post(`${domain}/api/auth/register`, { firstName, lastName, email, password }),
    // save: user =>
    //     requests.put('/user', { user })
    editUser: (firstName, lastName, userId) =>
        axios.put(`${domain}/api/users/${userId}/`, { firstName, lastName }, { headers: headers }),
    changePassword: (OldPassword, password) =>
        axios.put(`${domain}/api/users/changepassword/`, { OldPassword, password }, { headers: headers })
};
const Project = {
    create: props=>axios.post(`${domain}/api/project`, {...props}, {headers:headers})
}
export { Auth, Project };