const Sequelize = require('sequelize')
const sequelize = require('../connectDB')

const Slaughterhouse = sequelize.define('Slaughterhouses', {
    SlaughterhouseID:  {
      type     : Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type     : Sequelize.STRING,
      allowNull: false,
    },
    Region: {
        type     : Sequelize.STRING,
        allowNull: false,
    },
    City: {
        type     : Sequelize.STRING,
        allowNull: false,
    },
    Address: {
        type     : Sequelize.STRING,
        allowNull: false,
    },
    UserID: {
      type     : Sequelize.STRING,
  }
  }, {
    timestambs: false,
    freezeTableName: true
});

module.exports = Slaughterhouse