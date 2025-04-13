// load express
const express = require('express');

// make a router
const router = express.Router();

// load our technical questions
const questions = require('../data/technical.json');

// show all technical questions in a view
router.get('/', (req, res) => {
  res.render('technical', { questions });
});

module.exports = router;
