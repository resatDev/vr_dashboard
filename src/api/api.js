import axios from 'axios';

export function login(email, password) {
    return axios.get('http://localhost:5000/teachers/login', {
        email: email,
        password: password
    })
    .then(res => {
        return res
    })
}

