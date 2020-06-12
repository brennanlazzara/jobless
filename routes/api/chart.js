const router = require('express').Router();
const Chart = require('../../models/Chart');

router.get('/', async (req, res) => {
  const response = await Chart.find();

  const years = [];
  const mRate = [];
  const fRate = [];
  let sexUnemploymentData = response;

  sexUnemploymentData.forEach((row) => {
    years.push(row.Year);
    if (row.Sex === 'Male') {
      mRate.push(row.percentOfLaborForceUnemployed);
    }
    if (row.Sex === 'Women') {
      fRate.push(row.percentOfLaborForceUnemployed);
    }
  });
  let unique_array = [];
  for (let i = 0; i < years.length; i++) {
    if (unique_array.indexOf(years[i]) == -1) {
      unique_array.push(years[i]);
    }
  }
  let overallData = { unique_array, mRate, fRate };
  res.json(overallData);
});

module.exports = router;
