const { Users } = require("../models");

const userData = [
  {
    first_name: "Melissa",
    last_name: "Lycan",
    admin: true,
    email: "melissamlycan@gmail.com",
    username: "MelissaLycan",
    password: "password",
  },
  {
    first_name: "Casey",
    last_name: "Miller",
    admin: true,
    email: "caseysmiller@yahoo.com",
    username: "CaseyMiller",
    password: "password",
  },
  {
    first_name: "Peter",
    last_name: "Bookmeyer",
    admin: true,
    email: "peterbookmeyer@gmail.com",
    username: "PeterBookmeyer",
    password: "password",
  },
  {
    first_name: "Wren",
    last_name: "Sanchez",
    admin: true,
    email: "wrensanchez@gmail.com",
    username: "WrenSanchez",
    password: "password",
  },
  {
    first_name: "Ben",
    last_name: "Macho",
    admin: false,
    email: "BMacho@gmail.com",
    username: "BenMacho",
    password: "password",
  },
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
