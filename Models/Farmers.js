const Sequelize = require('sequelize')
const sequelize = require('../connectDB')

const Farmer = sequelize.define('Farmers', {
    FarmerID:  {
      type     : Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    FirstName: {
      type     : Sequelize.STRING,
      allowNull: false,
    },
    LastName: {
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
    timestamps: false,
    freezeTableName: true
});

module.exports = Farmer
