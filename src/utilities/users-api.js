import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}



// // http://localhost:3001/api/users
// import {getToken} from "./users-service";

// const BASE_URL = '/api/users'; //you can find this url in the server.js 

// // export async function signUp(userData) {
// //     const res = await fetch(BASE_URL, { //await is like a back and forth. it waits until the function is done. 
// //         // so it goes to all the diferent parts and then once it's fulfilled it will send the json data
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(userData)
// //     });
// //     // HTTP status code
// //     // code 200
// //     // 401 not found
// //     if (res.ok) {
// //         // for the front-end app
// //         return res.json();
// //     } else {
// //         throw new Error('Invalid Sign Up');
// //     }
// // }

// export async function signUp(userData) {
//     //     //we are going to send all the data from userData to the BASE_URL within routes
//     return sendRequest(BASE_URL, 'POST', userData);
// }

// export async function login(credentials) {
//     return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
// }

// async function sendRequest(url, method = 'GET', payload = null) {
//     const options = {method};
//     // if you want to send data to the server
//     if (payload) {
//         // we must send JSON
//         options.headers = {
//             'Content-Type': 'application/json'
//         };
//         // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
//         options.body = JSON.stringify(payload);
//     }

//     const token = getToken();
//     if (token) {
//         options.headers = options.headers || {};
//         options.headers.Authorization = `Bearer ${token}`;
//     }

//     // tell fetch function to send data to URL with some data
//     // if there is any data
//     // this depends on HTTP methods such as GET OR POST
//     const res = await fetch(url, options);
//     // HTTP status code 200, means everything went fine
//     if (res.ok) return res.json();
//     // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
//     throw new Error('Bad Request');
// }

// export function checkToken() {
//     // http://localhost:3001/api/users/check-token
//     return sendRequest(`${BASE_URL}/check-token`);
// }
