const controller = require("../controllers/ticket.controller");

module.exports = function (app) {
  app.get("/api/tickets", controller.index);
  app.get("/api/tickets/number", controller.number);
  app.put("/api/tickets/:id", controller.update);
};
