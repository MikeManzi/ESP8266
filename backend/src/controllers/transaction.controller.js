const Transaction = require("../models/transaction.model")

exports.createTransaction = async(req, res)=>{
    const transaction = new Transaction(req.body)
    try {
        await transaction.save()
        res.status(201).send(transaction)
    } catch (error) {
        res.status(500).send({error: error.toString()})
    }
}

exports.getTransactions = async(req, res)=>{
    try{
        const transactions = await Transaction.find({})
        res.send(transactions)
    }catch(error){
        res.status(500).send()
    }
}

