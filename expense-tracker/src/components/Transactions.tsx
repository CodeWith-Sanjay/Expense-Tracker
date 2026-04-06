import React from 'react'

import type {Transaction} from '../types/Transaction';

import FilterButton from './FilterButton';

type TransactionProps = {
  transactions: Transaction[],
  setTransaction: React.Dispatch<React.SetStateAction<Transaction[]>>
}

const Transactions = ({transactions, setTransaction}: TransactionProps) => {

  const animation = 'transition-all duration-300 ease-in-out';

  const handleTransactionDelete = (id: number) => {
    setTransaction((prev) => (
      prev.filter((transaction) => transaction.id !== id)
    ))
    console.log('Transaction Deleted');
  }

  return (
    <div className='mx-2 overflow-hidden sm:col-span-2 border border-orange-500 rounded-md shadow-md shadow-orange-300'>

      <div className='flex justify-between p-5 items-center'>
      <h1 className='text-2xl font-semibold text-orange-500 text-left'>Transactions</h1>
      <FilterButton setTransaction={setTransaction} transactions={transactions}/>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4 my-3 max-h-64 overflow-y-auto'>
        {transactions.length > 0 
        ? transactions.map((transaction) => (
          <div 
          className={`w-56 border border-orange-400 rounded-md p-4 items-start gap-2 shadow-md hover:shadow-orange-500 ${animation}`}
          key={transaction.id}>
            <h1 className='pb-1 font-bold text-left text-xl text-orange-500 '>{transaction.title}</h1>
            <div className='flex justify-between gap-5 py-2'>
            <p className='font-semibold text-left text-md text-orange-500'>Price: {transaction.amount}</p>
            <p className='font-semibold text-left text-md text-orange-500'>Type: {transaction.type}</p>
            </div>
            <p className='text-sm text-gray-700 py-2 text-right'>{transaction.date}</p>

            <button
            onClick={() => handleTransactionDelete(transaction.id ?? 0)}
            className={`bg-red-500 text-white hover:bg-red-700 py-2 px-3 rounded-sm text-sm my-2 bottom-0 ${animation}`}>
              Delete Transaction</button>
          </div>
        ))
        : <p className='col-span-4 text-lg font-medium text-gray-500'>No Transaction here yet</p>
        }
      </div>
    </div>
  )
}

export default Transactions
