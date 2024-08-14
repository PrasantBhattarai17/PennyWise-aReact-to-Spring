import React from 'react'
import MoneyCard from '../MoneyCard'
import InputIncomes from '../../Helper/InputIncomes'
import RecentTransactions from '../RecentTransactions'
const Income = () => {
  return (
    <div>
      <MoneyCard/>
      <InputIncomes/>
      <RecentTransactions/>
    </div>
  )
}

export default Income