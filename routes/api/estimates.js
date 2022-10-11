const express = require('express');
const router = express.Router();
const estimatesCtrl = require('../../controllers/api/estimates');

// POST /api/estimates
router.post('/', estimatesCtrl.create);

module.exports = router;