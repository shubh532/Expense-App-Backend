const Sequelize = require("sequelize")

const sequelize = require('../Utility/ExpDatabase')

const ExpenseData = sequelize.define('expensedata', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = ExpenseData