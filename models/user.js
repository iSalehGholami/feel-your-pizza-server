// models/user.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Pizza = require('./pizza');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mood: {
        type: DataTypes.ENUM('happy', 'hungry', 'bored', 'furious', 'sad'),
        allowNull: false
    },
    favoritePizzas: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        defaultValue: [] // Default value is an empty array
    },
    pizzaHistory: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        defaultValue: [] // Default value is an empty array
    }
});

// Define association with Pizza model for favorite pizzas
User.belongsToMany(Pizza, { through: 'UserFavoritePizzas', as: 'FavoritePizzas' });

// Define association with Pizza model for pizza history
User.belongsToMany(Pizza, { through: 'UserPizzaHistory', as: 'PizzaHistory' });

module.exports = User;
