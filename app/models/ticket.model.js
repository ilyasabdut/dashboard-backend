module.exports = (sequelize, Sequelize) => {
  const Ticket = sequelize.define("tickets", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    priority: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    }
  });

  return Ticket;
};
