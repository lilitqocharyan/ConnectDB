const Sequelize = require('sequelize');
module.exports =  new Sequelize("Slaughterhouses", "locallogin1", "1234", {
  dialect: "mssql",
  host: "localhost",
  port: "1433",
  requestTimeout: 300000,
  define: {
    freezeTableName: true,
    timestamps: false
    },
    
});

