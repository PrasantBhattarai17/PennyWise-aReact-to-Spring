import React from 'react'
import MoneyCard from '../MoneyCard'
import InputIncomes from '../../Helper/InputIncomes'
import RecentTransactions from '../RecentTransactions'

const Expenses = () => {
  return (
    <div>
      <MoneyCard/>
      <InputIncomes/>
      <RecentTransactions/>
    </div>
  )
}

export default Expenses