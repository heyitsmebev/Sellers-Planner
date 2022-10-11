const User = require('../../models/user');
const jwt = require('jsonwebtoken');

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



module.exports = {
    create
}