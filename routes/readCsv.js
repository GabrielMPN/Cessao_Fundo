const express = require('express');
const router = express.Router();
const readCsvController = require('../controllers/readCsvController')

router.post('/', readCsvController.readCsvPost);

module.exports = router;