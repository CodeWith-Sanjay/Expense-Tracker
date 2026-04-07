import React from 'react'

import type { Transaction } from '../types/Transaction';

type SummaryCardProps = {
  transactions: Transaction[]
}

const SummaryCards = ({transactions}: SummaryCardProps) => {

    const animation = 'transition-all duration-300 ease-in-out';

    let balance = 0;
    let income = 0;
    let expense = 0;

    if(transactions.length > 0) {
      for(const transaction of transactions) {
        if(transaction.type === 'Income') {
          balance += transaction.amount ?? 0;
          income += transaction.amount ?? 0;
        } else if(transaction.type === 'Expense') {
          balance -= transaction.amount ?? 0;
          expense += transaction.amount ?? 0;
        } else {
          console.error('Invalid transaction type: ', transaction.type);
        }
      } 
    }


  return (
    <div className={`mx-2 p-2 flex flex-col items-start border gap-3 border-orange-500 rounded-md shadow-md shadow-orange-300 ${animation}`}>
      <p className={`text-lg text-orange-500 ${animation}`}>Balance: {balance}</p>
      <p className={`text-lg text-orange-500 ${animation}`}>Income: {income}</p>
      <p className={`text-lg text-orange-500 ${animation}`}>Expense: {expense}</p>
    </div>
  )
}

export default SummaryCards
