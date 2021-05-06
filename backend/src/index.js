const express = require('express')
require('./db/mongoose')
const transactionRoute = require("./routes/transaction.route")
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())
app.use(transactionRoute)


const port = 5000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})