const express = require('express')
const { createTransaction, getTransactions } = require('../controllers/transaction.controller')
const router = express.Router({mergeParams: true})

router.route('/api/transaction').post(createTransaction)
router.route('/api/transactions').get(getTransactions)

module.exports = router