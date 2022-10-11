const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

//from the controllers, it's going to send the data back to the api

async function create(req, res) {
  try {
      const user = await User.create(req.body);
      console.log(req.body)
      const token = createJWT(user); //we created this function that accepts a user
      return res.json(token); //returns the token
  } catch (error) {
      res.status(400).json(error);
  }
}

function createJWT(user) {
  return jwt.sign( //.sign it's going to create a token
      {user},
      process.env.SECRET, //secret key is within .env which we will use within token 
      {expiresIn: '24h'}
  );
}

async function login(req, res) {
  try {
      // first fine the user
      const user = await User.findOne({email: req.body.email});
      // if there is no user in the throw an error
      if (!user) throw new Error();
      // get user submitted password, and compare with the object found on the db
      // apple, HSH3ychs
      const match = await bcrypt.compare(req.body.password, user.password);
      // no, match? send error
      if (!match) throw new Error();
      // there is a match! we found the user
      // create, and return the token
      const token = createJWT(user);
      res.json(token);
  } catch (err) {
      // something went wrong, send status 400 error
      res.status(400).json('Bad Credentials');
  }
}

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

module.exports = {
  create,
  login,
  checkToken
};