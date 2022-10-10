const mongoose = require('mongoose')
const User = require('../../models/Schemas')

module.exports = {
    create,
    login
  };

  
  async function create(req, res) {
    try {
      // Add the user to the db
      const user = await User.create(req.body);
      console.log(req.body)
    } catch (err) {
      // Probably a dup email
      res.status(400).json(err);
      console.log(req.body)

    }
  }
  
  async function login(req, res) {
    try {
      // Find the user by their email address
      const user = await User.findOne({ fullname: req.body.fullname });
      if (!user) throw new Error();
    } catch {
      res.status(400).json('Bad Credentials');
    }
  }