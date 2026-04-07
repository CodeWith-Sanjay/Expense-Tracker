import React from 'react'

import type {Transaction} from '../types/Transaction';

type TransactionFilterProps = {
    transactions: Transaction[],
    setFilterTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
}

const FilterButton = ({transactions, setFilterTransactions}: TransactionFilterProps) => {

    const animation = 'transition-all duration-300 ease-in-out';

    const setAllTransaction = () => {
      setFilterTransactions(transactions);
    }

    const setIncomeOnlyTransaction = () => {
       setFilterTransactions(
        transactions.filter((transaction) => transaction.type === 'Income')
       );
    }

    const setExpenseOnlyTransaction = () => {
        setFilterTransactions(
          transactions.filter((transaction) => transaction.type === 'Expense')
        );
    }

  return (
    <div
    className={`flex gap-3 px-3 py-1 text-sm font-medium ${animation}`}
    >
      <button 
      onClick={setAllTransaction}
      className={`border border-orange-500 px-3 py-1 rounded-md text-orange-500 hover:bg-orange-500 focus:bg-orange-500 focus:text-white hover:text-white ${animation}`}>
        All
      </button>
      
      <button 
      onClick={setIncomeOnlyTransaction}
      className={`border border-orange-500 px-3 py-1 rounded-md text-orange-500 hover:bg-orange-500 focus:bg-orange-500 focus:text-white hover:text-white ${animation}`}>
        Income
      </button>
    
      <button 
      onClick={setExpenseOnlyTransaction}
      className={`border border-orange-500 px-3 py-1 rounded-md text-orange-500 hover:bg-orange-500 focus:bg-orange-500 focus:text-white hover:text-white ${animation}`}>
        Expense
      </button>
    </div>
  )
}

export default FilterButton
