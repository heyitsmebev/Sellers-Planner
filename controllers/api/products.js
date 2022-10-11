const Product = require('../../models/product');

module.exports = {
  create,
};

async function create(req, res) {
  try {
    // Add the product to the db
    const product = await Product.create(req.body);
    // token will be a string
    // Yes, we can serialize a string
    res.json(product);
  } catch (err) {
    // Probably a dup email
    res.status(400).json(err);
  }
}

