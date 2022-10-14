const express = require('express');
const router = express.Router();
const estimatesCtrl = require('../../controllers/api/estimates');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, estimatesCtrl.getAll);
// router.get('/:id', ensureLoggedIn, estimatesCtrl.getOne);
router.put('/:id', ensureLoggedIn, estimatesCtrl.updateOne);
router.delete('/:id', ensureLoggedIn, estimatesCtrl.deleteOne);
router.post("/new", ensureLoggedIn, estimatesCtrl.createOne);
module.exports = router;