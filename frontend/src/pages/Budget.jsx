import React from 'react'
import "../styles/budget.css"
import BudgetForm from '../components/budget/BudgetForm'
import BudgetStatus from '../components/budget/BudgetStatus'

function Budget() {
  return (
    <main className='main'>
      <header className='page-header'>
        <div className="page-title">
          <div className='page-title'>Budget Manager</div>
          <div className="page-subtitle">Set and track your monthly spending limit</div>
        </div>
      </header>

      <div className="two-col">
        <BudgetForm />
        <BudgetStatus />
      </div>

    </main>
  )
}

export default Budget