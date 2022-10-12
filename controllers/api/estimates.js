const Estimate = require('../../models/estimate');

module.exports = {
  index,
  create,
};

async function index(req, res) {
  Estimate.find({}, function (err, estimates) {
    res.render("estimates", { title: "Mood Journal | Entry", estimates });
  });
}

// function newEstimate(req, res) {
//   res.render("estimates", { title: "Mood Journal | Entry" });
// }

// function create(req, res) {
//   const estimate = new Estimate(req.body);
//   estimate.user = req.user._id;
//   estimate.userName = req.user.name;
//   console.log(req.body)
//   estimate.save(function(err) {
//   if (err) return res.render('estimates/new', { title: 'Mood Journal | Entry'});
//   res.redirect('/estimates');
//   });
// }

async function create(req, res) {
  req.body.user = req.user._id;
  const estimate = await Estimate.create(req.body);
  console.log(req.body)
  res.json(estimate)
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

