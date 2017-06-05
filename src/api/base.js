import axios from 'axios'

export function fetch (method = 'GET', url, params, data) {
    return new Promise((resolve, reject) => {
        const options = {
            url,
            method,
            data,
            params,
            withCredentials: true,
            timeout: 500,
            headers: { 'Content-Type': 'application/json' }
        }
        axios(options)
        .then(res => {
            resolve(res.data)
        })
        .catch(error => {
            reject(error)
        })
    })
}
