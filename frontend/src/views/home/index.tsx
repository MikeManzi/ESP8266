import React,{useState, useEffect} from 'react'

const url = 'http://localhost:5000/api/transactions'
function Index() {
    const [transactions, setTransactions] = useState([])
    const getTransactions = async()=>{
        const response = await fetch(url)
        const transactions = await response.json()
        setTransactions(transactions)
    }
    useEffect(()=>{
        getTransactions()
    })
    return (
        <>
          <h1>RFID transactions</h1>  
          <table>
              <thead>
                <tr>
                    <th>#</th>
                    <th>Customer Id</th>
                    <th>Initial Balance</th>
                    <th>Transport Fare</th>
                    <th>New Balance</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index)=>{
                    const {customerId, initialBalance, transportFare, newBalance} = transaction
                    return(
                        <tr key={index}>

                            <th>{index + 1}</th>
                            <th>{customerId}</th>
                            <th>{initialBalance}</th>
                            <th>{transportFare}</th>
                            <th>{newBalance}</th>
                        </tr>
                    )
                })}
              </tbody>
          </table>
        </>
    )
}

export default Index
