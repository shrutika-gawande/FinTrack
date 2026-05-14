import React from 'react'

function IncomeSearch({searchTerm, setSearchTerm}) {
  return (
    <div className="search-filter">
      <div className="search-wrap">
        <span className="search-icon">⌕</span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=""
          placeholder="Search Expenses..."
        />
      </div>
    </div>
  );
}

export default IncomeSearch