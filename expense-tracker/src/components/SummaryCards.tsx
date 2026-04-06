import React from 'react'

const SummaryCards = () => {

    const animation = 'transition-all duration-300 ease-in-out';
  return (
    <div className={`mx-2 p-2 flex flex-col items-start border border-orange-500 rounded-md shadow-md shadow-orange-300 ${animation}`}>
      <p className={`text-gray-600 hover:text-orange-500 ${animation}`}>Balance: </p>
      <p className={`text-gray-600 hover:text-orange-500 ${animation}`}>Income: </p>
      <p className={`text-gray-600 hover:text-orange-500 ${animation}`}>Expense: </p>
    </div>
  )
}

export default SummaryCards
