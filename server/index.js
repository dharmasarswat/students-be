const express = require("express");
const studentRoutes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const seedDB = require("./seedDB");

const app = express();

mongoose.connect(
  "mongodb+srv://testUser:1234@lottery.pwzb7.mongodb.net/students?retryWrites=true&w=majority",
  (err) => {
    if (err) console.log(err);
    else console.log("Connected to db successfully!!!");
  }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/seedDB", (req, res) => {
  seedDB();
});

app.use("/api", studentRoutes);

app.get("*", (_, res) => {
  res.send("Invalid route");
});

app.listen(process.env.PORT ?? 4000, (err) => {
  if (err) {
    console.log("err: ", err);
    throw Error(err);
  } else {
    console.log("Server has been started at port 4000");
  }
});

module.exports = app;
