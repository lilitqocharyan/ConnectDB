const Sequelize = require('sequelize')
const sequelize = require('../connectDB')

const User = sequelize.define('Users', {
    ID:  {
      type     : Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Email: {
      type     : Sequelize.STRING,
      allowNull: false,
    },
    Password: {
        type     : Sequelize.STRING,
        allowNull: false,
    },
  }, {
    timestambs: false,
    freezeTableName: true
});


module.exports = User
