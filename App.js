const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")

const ExpSequelize = require("./Utility/ExpDatabase")
const ExpenseRoutes = require('./Routes/ExpenseRoutes')


app.use(cors())
app.use(bodyParser.json())

app.use(ExpenseRoutes)

ExpSequelize.sync({ force: true })
    .then(() => {
        app.listen(4000, () => {
            console.log("click on http://localhost:4000")
        })
    })
    .catch(err => console.log(err, "this err from App.js file"))

