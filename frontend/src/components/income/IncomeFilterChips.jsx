import React from 'react'

function IncomeFilterChips({setSelectedSrc}) {
  return (
    <div className="filter-chips">
        <div className="chip" onClick={() => setSelectedSrc("All")}>⚡ All</div>
        <div className="chip" onClick={() => setSelectedSrc("Salary")}>💼 Salary</div>
        <div className="chip" onClick={() => setSelectedSrc("Freelance")}>💻 Freelance</div>
        <div className="chip" onClick={() => setSelectedSrc("Business")}>🏢 Business</div>
        <div className="chip" onClick={() => setSelectedSrc("Investment")}>📈 Investment</div>
        <div className="chip" onClick={() => setSelectedSrc("Gift")}>🎁 Gift</div>
        <div className="chip" onClick={() => setSelectedSrc("Rental")}>🏠 Rental</div>
        <div className="chip" onClick={() => setSelectedSrc("Other")}>💰 Other</div>
    </div>
  )
}

export default IncomeFilterChips