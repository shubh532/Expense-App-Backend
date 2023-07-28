const express = require("express")

const ExpenseRoute = express.Router()

const ExpenseCotroller = require('../Controllers/ExpController')


ExpenseRoute.get("/", ExpenseCotroller.getfrontapage)
ExpenseRoute.get("/getExpense-data", ExpenseCotroller.getExpenseData)
ExpenseRoute.post("/postExpense-data", ExpenseCotroller.postExpenseData)
ExpenseRoute.delete("/delete/:expenseID", ExpenseCotroller.deleteExpensedata)

module.exports = ExpenseRoute