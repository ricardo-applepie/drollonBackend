// sequelize.js
const { Sequelize } = require('sequelize');  // Ensure Sequelize is imported

const environment = 'development'; // Change this if using a different environment

const sequelize = new Sequelize('drollon', 'postgres', 'san123tos', {
  host: 'localhost',
  dialect: 'postgres'
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
