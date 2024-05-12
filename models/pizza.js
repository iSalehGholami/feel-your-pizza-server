// models/pizza.js

const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const PizzaIngredient = require('./pizzaIngredient');

const Pizza = sequelize.define('Pizza', {
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


Pizza.belongsToMany(Ingredient, { through: PizzaIngredient });
Pizza.belongsToMany(User, { through: 'UserFavoritePizzas', as: 'Users' });
Pizza.belongsToMany(User, { through: 'UserPizzaHistory', as: 'Users' });


module.exports = Pizza;
