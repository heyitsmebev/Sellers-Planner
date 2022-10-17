const Estimate = require('../../models/estimate');

module.exports = {
  getAll,
  getOne,
  deleteOne,
  createOne,
  updateOne
};

async function getAll(req, res) {
  const estimates = await Estimate.find({}).sort('-createdAt').exec();
  res.json(estimates);
}

async function getOne(req, res) {
  const estimates = await Estimate.findById(req.params.id);
  res.json(estimates)
}

// Update an item
async function updateOne(req, res) {
  const estimates = await Estimate.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
  res.json(estimates);
  console.log('this is  our controller', req.params.body)
}

async function createOne(req, res) {
  req.body.user = req.user._id;
  const estimate = await Estimate.create(req.body);
  console.log(req.body)
  res.json(estimate)
}

async function deleteOne(req, res) {
  await Estimate.findOneAndDelete({_id: req.params.id, user: req.user._id});
  res.json('Deleted!');
}

