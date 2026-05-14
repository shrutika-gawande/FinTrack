import React from 'react'

function ExpenseItem({expense}) {

    const categoryIcons = {
    "Food & Dining": "🍔",
    Shopping: "🛍️",
    Travel: "✈️",
    Entertainment: "🎮",
    Health: "💊",
    Utilities: "⚡",
    Education: "📚",
    Other: "📦"
  };

  return (
    <div className="expense-item">
        <div className="expense-icon" style={{background:'#a0aec022',color:'#a0aec0'}}>{categoryIcons[expense.category]}</div>
        <div className="expense-info">
            <div className="expense-title">{expense.title}</div>
            <div className="expense-meta">{expense.category} • {expense.date}</div>
        </div>
        <div className="expense-amount" style={{color:'var(--red)'}}>&#8377;{expense.amount}</div>
    </div>
  )
}

export default ExpenseItem