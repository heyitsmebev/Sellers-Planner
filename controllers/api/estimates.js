const Estimate = require('../../models/estimate');

module.exports = {
  create,
};

async function create(req, res) {
  try {
    // Add the estimate to the db
    const estimate = await Estimate.create(req.body);
    console.log(req.body)
    // token will be a string
    // Yes, we can serialize a string
    res.json(estimate);
  } catch (err) {
    // Probably a dup email
    res.status(400).json(err);
  }
}

