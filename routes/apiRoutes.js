const fs = require('fs');

module.exports = (app) => {
  app.get('/api/sexUnemployment', (req, res) => {
    fs.readFile('db/sexUnemployment.json', (err, data) => {
      const years = [];
      const mRate = [];
      const fRate = [];
      if (err) throw err;
      let sexUnemploymentData = JSON.parse(data);

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
  });
};
