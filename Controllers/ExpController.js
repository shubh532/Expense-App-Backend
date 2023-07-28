const ExpenseData = require('../Models/ExpModel')

exports.getExpenseData = async (req, res, next) => {
    const Data = await ExpenseData.findAll()
    res.status(201).json({ ExpenseData: Data })
    res.end()
}

exports.getfrontapage = (req, res, next) => {
    res.send("working fine from / route")
}

exports.postExpenseData = async (req, res, next) => {
    const amount = req.body.amount
    const description = req.body.description
    const date = req.body.date
    try {
        const Data = await ExpenseData.create({
            amount: amount,
            description: description,
            date: date
        })
        res.status(201).json({ ExpenseData: Data })
        res.end()
    } catch (err) {
        console.log(err)
    }

}

exports.deleteExpensedata = async (req, res, next) => {
    try {
        const expenseID = req.params.expenseID
        const expenseData = await ExpenseData.findOne({ where: { id: expenseID } })
        expenseData.destroy()
        res.status(200).json({ message: "data delete" })
    } catch (err) {
        console.log(err)
    }
}