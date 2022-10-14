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
// async function create(req, res) {
//   const estimate = new Estimate(req.body)
//   req.body.user = req.user._id;
//   console.log('console log : req.body' + req.body)
//   estimate.save(function(err) {
//     if (err) return res.render('estimates/new', { title: 'Mood Journal | Entry'});
//     res.redirect('/estimates');
//     });
//   // try {
//   //   // Add the estimate to the db

//   //   // const estimate = await Estimate.create(req.body);
//   //   // token will be a string
//   //   // Yes, we can serialize a string
//   //   // res.json(estimate);
//   // } catch (err) {
//   //   // Probably a dup email
//   //   res.status(400).json(err);
//   // }
// }

