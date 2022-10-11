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
  // Delete the network request code to the 
  // users-api.js module which will ultimately
  // return the JWT
  const token = await usersAPI.signUp(userData);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem('token');
  // getItem will return null if no key
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not miliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token');
}

// export async function signUp(userData) { //userData is the sign up form input 
//     try {
//           // users-api.js module which will ultimately
//     // return the JWT
//         const token = await usersAPI.signUp(userData);
//         // signUp function calls the usersAPI and going to wait until that task is fulfilled  
//         //usersAPI.signUp we are going to create this function
//         // Persist the token to localStorage
//         localStorage.setItem('token', token);
//         return getUser(); //user object  //it will then be called by the signupform
//     } catch {
//         throw new Error("Invalid Sign Up");
//     }
// }

// //getToken is reading token from localStorage
// export function getToken() {
//   // read the token from the local storage 
//   const token = localStorage.getItem('token');
//   //we cannot find a token
//   if(!token) return null;
//   //there is a token
//   // grab teh payload from the JWT 
//   const payload = JSON.parse(atob(token.split('.')[1])); //we need to parse all the jibberish token data base64 coding. we can do that with atob(token.split('')[1] (slice the first payload) 
//   if(payload.exp < Date.now() / 1000) {
//     //check if it's expired or not 
//     //is expired 
//     localStorage.removeItem('token');
//     return null; //return null if it's expired 
//   } //otherwise 
//     return token; //everything went well, return the token 
// }

// //getUser read user information from token
// export function getUser() { //return user and extract data from user token
//   const token = getToken(); //from the function earlier, we will see if token is there or not..etc  
//   return token ? JSON.parse(atob(token.split('.')[1])).user : null; // return token if JSON.parase, grab token, split it apart by dot, and grab the user objeect [1], otherwise reutrn null
// } 

// //removes token from localStorage 
// export function logOut() {
//   // remove token from local storage
//   localStorage.removeItem('token');
// }

// export async function login(credentials) {
//   // credentials means the data we obtained from the LoginForm.jsx
//   // send it to the api and see if the user has correct credentials
//   const token = await usersAPI.login(credentials);
//   // save the token in local storage
//   localStorage.setItem('token', token);
//   // call getUser, so we can save the user data by calling setUser inside
//   // the LoginForm.jsx
//   return getUser();
// }

// export function checkToken() {
//   return usersAPI.checkToken()
//       .then(dateStr => new Date(dateStr));
// }