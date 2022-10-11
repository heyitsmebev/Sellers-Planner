import * as usersAPI from './users-api';

// export async function signUp(userData) {
//     //userData is the sign up form input 
//     // Delete the network request code to the 
//     // users-api.js module which will ultimately
//     // return the JWT
//     const token = await usersAPI.signUp(userData);
//     // signUp function calls the usersAPI and going to wait until that task is fulfilled  
//     //usersAPI.signUp we are going to create this function
//     // Persist the token to localStorage
//     localStorage.setItem('token', token);
//     return getUser();
//   }

export async function signUp(userData) {
    try {
        const token = await usersAPI.signUp(userData);
        localStorage.setItem('token', token);
        return token;
    } catch {
        throw new Error("Invalid Sign Up");
    }
}