const { Users } = require("../models");

const userData = [
  {
    first_name: "Melissa",
    last_name: "Lycan",
    admin: true,
    email: "melissamlycan@gmail.com",
    username: "MelissaLycan",
    password: "$2b$10$QGqNsQpIcATb0Y6q0Sss.e/h3stotofskxd.nMTm3WUzkEYbk2/Bi",
  },
  {
    first_name: "Casey",
    last_name: "Miller",
    admin: true,
    email: "caseysmiller@yahoo.com",
    username: "CaseyMiller",
    password: "$2b$10$QGqNsQpIcATb0Y6q0Sss.e/h3stotofskxd.nMTm3WUzkEYbk2/Bi",
  },
  {
    first_name: "Peter",
    last_name: "Bookmeyer",
    admin: true,
    email: "peterbookmeyer@gmail.com",
    username: "PeterBookmeyer",
    password: "$2b$10$QGqNsQpIcATb0Y6q0Sss.e/h3stotofskxd.nMTm3WUzkEYbk2/Bi",
  },
  {
    first_name: "Wren",
    last_name: "Sanchez",
    admin: true,
    email: "wrensanchez@gmail.com",
    username: "WrenSanchez",
    password: "$2b$10$QGqNsQpIcATb0Y6q0Sss.e/h3stotofskxd.nMTm3WUzkEYbk2/Bi",
  },
  {
    first_name: "Ben",
    last_name: "Macho",
    admin: false,
    email: "BMacho@gmail.com",
    username: "BenMacho",
    password: "$2b$10$QGqNsQpIcATb0Y6q0Sss.e/h3stotofskxd.nMTm3WUzkEYbk2/Bi",
  },
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
