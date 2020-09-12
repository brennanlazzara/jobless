const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChartSchema = new Schema({
  agricultureEmployed: String,
  civilianNoninstitutionalPopulation: String,
  nonagriculturalIndustriesEmployed: String,
  notInLaborForce: String,
  numberUnemployed: String,
  percentOfLaborForceUnemployed: Number,
  percentOfPopulationCivillianLaborForce: Number,
  percentOfPopulationEmployed: Number,
  Sex: String,
  totalCivillianLaborForce: String,
  totalEmployed: String,
  Year: Number,
});

module.exports = Chart = mongoose.model('Chart', ChartSchema);
