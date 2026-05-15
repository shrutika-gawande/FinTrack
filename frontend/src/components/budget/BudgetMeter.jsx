import React from 'react'

function BudgetMeter({ percentage }) {
    const pct = Number(percentage); 
  return (
    <div className="budget-meter">
        <div 
            className="budget-fill"
            style={{ width: `${Math.min(pct, 100)}%`,
        backgroundColor: pct > 100 ? '#f03e3e' : '#38d9a9' }}
        ></div>
    </div>
  )
}

export default BudgetMeter