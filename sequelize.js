require('dotenv').config();
const { Sequelize } = require('sequelize');  // Ensure Sequelize is imported

const isDevelopment = process.env.NODE_ENV === 'development'; // Change this if using a different environment


// const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
//   host: process.env.HOST,
//   dialect: process.env.DIALECT || 'postgres'
// });

const sequelize = new Sequelize(process.env.DB_URL , { /* options */ });

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
