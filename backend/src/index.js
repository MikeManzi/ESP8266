const express = require('express')
require('./db/mongoose')
const transactionRoute = require("./routes/transaction.route")
const app = express()

app.use(express.json())
app.use(transactionRoute)


const port = 6000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})