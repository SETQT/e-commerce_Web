import React from 'react';
import axios from 'axios';


export const getToken = () => {
    return localStorage.getItem('USER_KEY');
}

// export const userLogin=(authRequest)=>{
//     return axios({
//         'method':'POST',
//         'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/auth/login`,
//         'data':authRequest
//     })
// }

export const fetchUserData = (authRequest) => {
    // console.log(getToken());
    return axios({

        method: 'GET',
        url: `http://localhost:8081/`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}
