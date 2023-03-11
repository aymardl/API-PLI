const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "pli",
  "root",
  "root",
  {
  dialect: 'mysql',
  host: "127.0.0.1",
});

export default sequelize;
