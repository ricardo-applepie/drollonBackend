// sequelize.js
const { Sequelize } = require('sequelize');  // Ensure Sequelize is imported

const environment = 'development'; // Change this if using a different environment


const sequelize = new Sequelize(`postgresql://neondb_owner:HIFuL4jt0pvG@ep-tiny-base-a5rexjlz.us-east-2.aws.neon.tech/neondb?sslmode=require
`, {
  dialect: dbConfig.dialect,
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
