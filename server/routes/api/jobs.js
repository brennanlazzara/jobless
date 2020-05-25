const express = require('express');
const router = express.Router();
const axios = require('axios');
const CircularJSON = require('circular-json');

router.get('/', async (req, res) => {
  try {
    const jobs = await axios(
      'https://jobs.github.com/positions.json?page=1&search=code',
    );

    console.log(jobs);

    res.send(CircularJSON.stringify(jobs));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
