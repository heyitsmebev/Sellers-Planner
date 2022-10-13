const Estimate = require('../../models/estimate');

module.exports = {
  getAllEstimateCtrl,
  getOneEstimateCtrl,
  deleteOneEstimateCtrl,
  createOneEstimateCtrl,
  updateOneEstimateCtrl
};

async function getAllEstimateCtrl(req, res) {
  const estimates = await Estimate.find({}).sort('-createdAt').exec();
  res.json(estimates);
}

async function getOneEstimateCtrl(req, res) {
  const estimates = await Estimate.findById(req.params.id);
  res.json(estimates)
}

async function updateOneEstimateCtrl(req,res) {
  const estimates = await Estimate.findOneAndUpdate( req.params.id,req.body, { new: true })
  res.json(estimates)
}
async function createOneEstimateCtrl(req, res) {
  req.body.user = req.user._id;
  const estimate = await Estimate.create(req.body);
  console.log(req.body)
  res.json(estimate)
}

async function deleteOneEstimateCtrl(req, res) {
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

