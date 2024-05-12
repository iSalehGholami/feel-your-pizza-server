const { Sequelize } = require('sequelize');

// Create Sequelize instance and connect to MySQL database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

// Test the database connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL database');
    } catch (error) {
        console.error('Error connecting to MySQL database:', error.message);
    }
})();

module.exports = sequelize;
