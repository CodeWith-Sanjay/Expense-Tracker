import React from 'react'

import type {Transaction} from '../types/Transaction';

type TransactionFilterProps = {
    transactions: Transaction[],
    setTransaction: React.Dispatch<React.SetStateAction<Transaction[]>>
}

const FilterButton = ({setTransaction, transactions}: TransactionFilterProps) => {

    const animation = 'transition-all duration-300 ease-in-out';

    const setAllTransaction = () => {
        setTransaction(transactions);
        
    }

    const setIncomeOnlyTransaction = () => {
        setTransaction((prev) => (
            prev.filter(transaction => transaction.type === 'Income')
        ))
    }

    const setExpenseOnlyTransaction = () => {
        setTransaction((prev) => (
            prev.filter(transaction => transaction.type === 'Expense')
        ))
    }
  return (
    <div
    className={`flex gap-3 px-3 py-1 text-sm font-medium ${animation}`}
    >
      <button 
      onClick={setAllTransaction}
      className={`border border-orange-500 px-3 py-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white ${animation}`}>
        All
      </button>
      
      <button 
      onClick={setIncomeOnlyTransaction}
      className={`border border-orange-500 px-3 py-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white ${animation}`}>
        Income
      </button>
    
      <button 
      onClick={setExpenseOnlyTransaction}
      className={`border border-orange-500 px-3 py-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white ${animation}`}>
        Expense
      </button>
    </div>
  )
}

export default FilterButton
