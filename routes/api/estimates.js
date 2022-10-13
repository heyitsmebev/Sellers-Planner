const express = require('express');
const router = express.Router();
const estimatesCtrl = require('../../controllers/api/estimates');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, estimatesCtrl.getAllEstimateCtrl);
router.get('/:id', ensureLoggedIn, estimatesCtrl.getOneEstimateCtrl);
router.put('/:id', ensureLoggedIn, estimatesCtrl.updateOneEstimateCtrl);
router.delete('/:id', ensureLoggedIn, estimatesCtrl.deleteOneEstimateCtrl);
router.post("/", ensureLoggedIn, estimatesCtrl.createOneEstimateCtrl);
module.exports = router;