const db = require("../models");
const User = db.user;
const UserTicket = db.user_tickets;


exports.index = (req, res) => {
  User.findAll().then((user) => {
    if (user) {
      res.status(200).send({
        data: user,
      });
      return;
    }
  });
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.updateUserTicket = (req, res) => {
  // Save User to Database
  UserTicket.create({
    userId: req.body.userId,
    ticketId: req.body.ticketId,
  })
    .then((user_ticket) => {
      res.status(200).send({ message: "User Ticket Updated Successfully", data: user_ticket });
      return;
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};