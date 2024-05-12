// models/ingredient.js

const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const PizzaIngredient = require('./pizzaIngredient');

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

Ingredient.belongsToMany(Pizza, { through: PizzaIngredient });


module.exports = Ingredient;
