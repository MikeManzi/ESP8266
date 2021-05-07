const express = require('express')
require('./db/mongoose')
const transactionRoute = require("./routes/transaction.route")
const cors = require('cors')
const {Server} = require('socket.io')
const app = express()
const http = require('http')
const { getTransactions } = require('./controllers/transaction.controller')
const server = http.createServer(app)
const io = new Server(server,{cors:{
    origin: '*'
}})
app.use(cors())

app.use(express.json())
app.use(transactionRoute)

io.on('connection',(socket)=>{
    let interval
    console.log('User connected');
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
    });
})

const getApiAndEmit = async (socket) => {
    let response = await getTransactions();
    socket.emit("Transactions", response.transactions || []);
};


const port = 5000
server.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})