const db = require("../models");
const Ticket = db.ticket;
const { Op } = require("sequelize");
var sequelize = require("sequelize");

exports.index = (req, res) => {
  Ticket.findAll().then((ticket) => {
    if (ticket) {
      res.status(200).send({
        data: ticket,
      });
      return;
    }
  });
};

exports.number = (req, res) => {
  Ticket.findAll({
    attributes: [
      "priority",
      [sequelize.fn("COUNT", sequelize.col("priority")), "total_tickets"],
    ],
    group: ["priority"],
  }).then((number) => {
    if (number) {
      res.status(200).send({
        data: number,
      });
      return;
    }
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Ticket.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Ticket was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Ticket with id=${id}. Maybe Ticket was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Ticket with id=" + id,
      });
    });
};
