import React from 'react';
import axios from 'axios';

const API = 'http://localhost:8081/'

export const getToken = () => {
    let jwt = localStorage.getItem('USER_KEY');
    if (!jwt) return "{}"
    return jwt
}


class ServiceAPI {

    async postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    fetchUserData = () => {
        // console.log(getToken());
        return axios({

            method: 'GET',
            url: API,
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
    }
    login = (username, password) => {
        return axios.post(API + "login"
            , ({
                userName: username,
                password: password
            }))
    }
}


export default new ServiceAPI();