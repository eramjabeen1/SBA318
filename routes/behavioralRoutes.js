// load express
const express = require('express');

// make a router
const router = express.Router();

// load our behavioral questions
const questions = require('../data/behavioral.json');

// get all questions and show them in a view
router.get('/', (req, res) => {
  res.render('behavioral', { questions });
});

module.exports = router;
