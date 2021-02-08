const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
var bcrypt = require("bcryptjs");


var corsOptions = {
  origin: "http://localhost:8081",
};
const db = require("./app/models");
const User = db.user;
const Ticket = db.ticket;

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Db");
//   initial();
// });

db.sequelize.sync();

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/ticket.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  User.create({
    id: 1,
    username: "user",
    email: "user@mail.com",
    password: bcrypt.hashSync("123456789",8),
  });

  User.create({
    id: 2,
    username: "user2",
    email: "user2@mail.com",
    password: bcrypt.hashSync("123456789",8),
  });

  Ticket.create({
    id: 1,
    name: "Cant get into Email",
    priority: "LOW",
    status: "Open",
  });

  Ticket.create({
    id: 2,
    name: "Cant Login",
    priority: "HIGH",
    status: "Open",
  });
}
