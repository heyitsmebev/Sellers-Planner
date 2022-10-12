const express = require('express');
const router = express.Router();
const estimatesCtrl = require('../../controllers/api/estimates');

router.get('/', estimatesCtrl.index);
router.post("/", estimatesCtrl.create);

module.exports = router;