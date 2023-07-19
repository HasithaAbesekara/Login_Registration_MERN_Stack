const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

//create with conection in mongoo db
mongoose.connect("mongodb://127.0.0.1:27017/emaployee");

//create login verifation
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

//create regster router
app.post("/register", (req, res) => {
  //create model of model/Employee.js
  EmployeeModel.create(req.body)
    .then((employess) => res.json(employess))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running");
});
