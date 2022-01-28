const Student = require("../model/studentModel");

const getStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send(JSON.stringify(error));
  }
};

const addStudent = async (req, res) => {
  const { name, age, class: studingIn, country } = req.body;

  if (!name || !age || !studingIn || !country) {
    res.send("Please add all details.");
    return;
  }
  try {
    const student = new Student({
      name,
      class: studingIn,
      age,
      country,
    });

    const newStudent = await student.save();
    res.json(newStudent);
  } catch (error) {
    res.status(500).send(JSON.stringify(error));
    console.log("error: ", error);
  }
};

const removeStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);

    if (!student) {
      res.status(404).send("Student not found");
      return;
    }

    await Student.findByIdAndRemove(id);
    res.send("Student removed successfully!!!");
  } catch (error) {
    res.status(500).send(JSON.stringify(error));
    console.log("error: ", error);
  }
};

const updateStudent = async (req, res) => {
  const { name, age, class: studingIn, country } = req.body;
  const { id } = req.params;

  if (!name || !age || !studingIn || !country) {
    res.send("Please add all details.");
    return;
  }
  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, {
      name,
      age,
      class: studingIn,
      country,
    });
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).send(JSON.stringify(error));
    console.log("error: ", error);
  }
};

module.exports = {
  getStudents,
  addStudent,
  removeStudent,
  updateStudent,
};
