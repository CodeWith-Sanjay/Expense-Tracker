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

      <h1 className="text-3xl font-semibold text-orange-500 my-5">Expense Tracker</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-5 my-4">
        <TransactionForm setTransaction={setTransactions} />
        <SummaryCards />
        <Transactions />
      </div>
    </div>
  )
}

export default App
