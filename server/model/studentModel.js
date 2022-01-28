const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    name: String,
    country: String,
    class: String,
    age: Number,
  },
  { timestamps: true }
);

module.exports = Student = mongoose.model("Student", StudentSchema);
