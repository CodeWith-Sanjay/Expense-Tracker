import { useState } from "react"

import type { Transaction } from "./types/Transaction";
import TransactionForm from "./components/TransactionForm";
import SummaryCards from "./components/SummaryCards";
import Transactions from "./components/Transactions";

function App() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filterTransactions, setFilterTransactions] = useState<Transaction[]>([])

  return (
    <div className="flex flex-col text-center items-center justify-center min-h-screen w-full ">

      <h1 className="text-4xl font-semibold text-orange-500 py-6 leading-11">Expense Tracker</h1>

      <div className="grid sm:grid-cols-2 items-start justify-center gap-5 my-4 md:w-full md:max-w-3xl px-4">
        <TransactionForm setTransaction={setTransactions} />
        <SummaryCards transactions={transactions}/>
        <Transactions transactions={transactions} filterTransactions={filterTransactions} setFilterTransactions={setFilterTransactions}/>
      </div>
    </div>
  )
}

export default App
