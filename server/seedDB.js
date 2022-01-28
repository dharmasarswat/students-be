const faker = require("faker");
const Student = require("./model/studentModel");

function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const countries = [
  "India",
  "USA",
  "England",
  "Nepal",
  "Bhutan",
  "China",
  "Bangladesh",
];

// Student.collection.drop();

async function seedDB() {
  try {
    new Array(100).fill(0).map((_) => {
      const name = faker.name.firstName();
      const country = countries[randomInt(0, countries.length)];
      const studyingIn = randomInt(1, 12);
      const age = randomInt(4, 16);

      const student = new Student({
        name,
        country,
        class: studyingIn,
        age,
      });
      student.save();
    });
    console.log("Database seeded! :)");
  } catch (err) {
    console.log(err);
  }
}

module.exports = seedDB;
