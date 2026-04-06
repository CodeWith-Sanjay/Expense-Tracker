import React, { useState, type SetStateAction } from 'react'

import type { Transaction } from '../types/Transaction';

interface Errors {
    title: string,
    amount: string,
    type: string
}

type TransactionFormProps = {
    setTransaction: React.Dispatch<SetStateAction<Transaction[]>>
}

const TransactionForm = ({setTransaction} : TransactionFormProps ) => {

    const [errors, setErrors] = useState<Errors>({ title: '', amount: '', type: ''});
    const [formData, setFormData] = useState<Transaction>({
        id: null,
        title: '',
        amount: null,
        type: 'Income',
        date: ''
    });

    const animation = 'transition-all duration-300 ease-in-out';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:name === 'amount' 
                ? Number(value)
                : name === 'type'
                ? (value as 'income' | 'expense')
                : value
        }))
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: Errors = {
            title: '',
            amount: '',
            type: ''
        }

        if(!formData.title) {
            newErrors.title = 'Title is required'
        } 
        
        if(!formData.amount) {
            newErrors.amount = 'Amount is required'

        } else if(formData.amount <= 0) {
            newErrors.amount = 'Amount must be greater than zero'
        }

        if(!formData.type) {
            newErrors.type = 'Type is required'
        }

        setErrors(newErrors);

        if(newErrors.title || newErrors.amount || newErrors.type) return;

        const date = new Date().toLocaleString()

        const newTransaction: Transaction = {
            ...formData,
            id: Date.now(),
            date
        }

        setTransaction(prev => [...prev, newTransaction])

        console.log(newTransaction);
        console.log('Transaction added');

        setFormData({
            id: null,
            title: '',
            amount: null,
            type: 'Income',
            date: ''
        })
    } 

    const firstError = Object.values(errors).find((error) => error !== '');
  return (
    <form
    onSubmit={handleFormSubmit}
    className={`mx-2 flex flex-col gap-4 p-5 border border-orange-500 rounded-sm shadow-orange-300 shadow-md ${animation}`}>
        <input 
        className={`p-2 border rounded-sm outline-0 text-gray-500 w-full hover:text-orange-500 hover:border-orange-500 hover:shadow-orange-300 hover:shadow-md ${animation}`}
        type='text'
        name='title'
        placeholder='Title...'
        onChange={handleInputChange}
        value={formData.title}/>

        <input 
        className={`p-2 border rounded-sm outline-0 text-gray-500 w-full hover:text-orange-500 hover:border-orange-500 hover:shadow-orange-300 hover:shadow-md ${animation}`}
        type='number'
        name='amount'
        placeholder='Amount...'
        onChange={handleInputChange}
        value={formData.amount ?? ''}/>

        <select
        className={`p-2 border rounded-sm outline-0 text-gray-500 w-full hover:text-orange-500 hover:border-orange-500 hover:shadow-orange-300 hover:shadow-md ${animation}`}
        name='type'
        onChange={handleInputChange}
        value={formData.type}>
            <option value='income'>Income</option>
            <option value='expense'>Expense</option>
        </select>

        <button 
        className={`py-2 font-semibold rounded-sm text-orange-500 hover:bg-orange-500 hover:text-white ${animation}`}
        type='submit'>
            Submit
        </button>

        {firstError && (
            <p className='text-red-500'>{firstError}</p>
        )}        

    </form>
  )
}

export default TransactionForm
