const router = require("express").Router();
const {
  getStudents,
  addStudent,
  removeStudent,
  updateStudent,
} = require("./controllers/studentController");

router.get("/student", getStudents);
router.post("/student", addStudent);
router.delete("/student/:id", removeStudent);
router.patch("/student/:id", updateStudent);

module.exports = router;
