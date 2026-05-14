import React from 'react'

function ExpenseFilterChips({ setSelectedCat }) {
  return (
    <div className="filter-chips">
        <div className="chip" onClick={() => setSelectedCat("All")}>⚡ All</div>
        <div className="chip" onClick={() => setSelectedCat("Food & Dining")}>🍔 Food & Dining</div>
        <div className="chip" onClick={() => setSelectedCat("Travel")}>✈️ Travel</div>
        <div className="chip" onClick={() => setSelectedCat("Shopping")}>🛍️ Shopping</div>
        <div className="chip" onClick={() => setSelectedCat("Health")}>💊 Health</div>
        <div className="chip" onClick={() => setSelectedCat("Entertainment")}>🎮 Entertainment</div>
        <div className="chip" onClick={() => setSelectedCat("Utilities")}>⚡ Utilities</div>
        <div className="chip" onClick={() => setSelectedCat("Education")}>📚 Education</div>
        <div className="chip" onClick={() => setSelectedCat("Other")}>📦 Other</div>
    </div>
  )
}

export default ExpenseFilterChips