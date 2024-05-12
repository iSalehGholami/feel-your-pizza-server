// models/ingredient.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const PizzaIngredient = require('./pizzaingredient');
const Pizza = require('./pizza');

const Ingredient = sequelize.define('Ingredient', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Ingredient.belongsToMany(Pizza, { through: PizzaIngredient });


module.exports = Ingredient;
