// http://localhost:3001/api/users
const BASE_URL = '/api/users'; //you can find this url in the server.js 

export async function signUp(userData) {
    const res = await fetch(BASE_URL, { //await is like a back and forth. it waits until the function is done. 
        // so it goes to all the diferent parts and then once it's fulfilled it will send the json data
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    // HTTP status code
    // code 200
    // 401 not found
    if (res.ok) {
        // for the front-end app
        return res.json();
    } else {
        throw new Error('Invalid Sign Up');
    }
}

// export function signUp(userData) {
//     //we are going to send all the data from userData to the BASE_URL within routes
//   return sendRequest(BASE_URL, 'POST', userData);
// }

// export function login(credentials) {
//   return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
// }
