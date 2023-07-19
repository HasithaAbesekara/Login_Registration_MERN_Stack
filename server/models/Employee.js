//cretate table schema
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  //asing the filed in  tbale
  name: String,
  email: String,
  password: String,
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;
