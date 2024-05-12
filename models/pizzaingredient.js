// models/pizzaIngredient.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Pizza = require('./pizza');
const Ingredient = require('./ingredient');

const PizzaIngredient = sequelize.define('PizzaIngredient', {
    quantity: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

PizzaIngredient.belongsTo(Pizza);
PizzaIngredient.belongsTo(Ingredient);


module.exports = PizzaIngredient;
