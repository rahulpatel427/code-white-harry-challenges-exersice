const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean,
})

const employee = mongoose.model('Employee', employeeSchema);
module.exports = employee;
