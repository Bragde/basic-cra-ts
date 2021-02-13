import { IUsers } from '../interface/interface';

// CONSTANTS FOR BASE URLS
const URL_USER = 'http://localhost:3030/api/user';

// HELPER METHODS
// function checkResponseStatus(response) {
//     if (response.status >= 200 && response.status < 300) {
//         return Promise.resolve(response);
//     } else {
//         return Promise.reject(new Error(response.statusText));
//     }
// }

// function parsToJs(response) {
//     return response.json();
// }

// READ EXAMPLE https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

export const getUsers = async (): Promise<IUsers[]> => {
    return fetch(URL_USER).then((response) => response.json());
};

// const users = getUsers();
// console.log(users);

// CREATE EXAMPLE method implementation:
// async function createUser(data = {}) {
//     return await fetch(BASE_URL_USER, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data),
//     }).then((response) => response.json());
// }

// const response = createUser(user).catch((error) => {
//     console.log(error);
// });
// console.log(response);

// Uploading JSON data
// Use fetch() to POST JSON-encoded data.

// const data = { username: 'example' };

// fetch('https://example.com/profile', {
//     method: 'POST', // or 'PUT'
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
// })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log('Success:', data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
