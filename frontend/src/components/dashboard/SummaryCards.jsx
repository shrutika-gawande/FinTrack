import React from 'react'

function SummaryCards() {
  return (
        <div className="summary-grid">
          <div className="summary-card" style={{"--card-accent":"var(--green-bg)"}}>
            <div className='card-icon' style={{background:"var(--green-bg)",color:"#38d9a9"}}>💵</div>
            <div className='card-lable'>Total Income</div>
            <div className='card-value'style={{color:"#38d9a9"}}>&#8377;10000</div>
            <div className='card-sub'>5 entries this month</div>
          </div>
          <div className="summary-card" style={{"--card-accent":"var(--red-bg)"}}>
            <div className='card-icon' style={{background:"var(--red-bg)",color:"#ff6b8a"}}>💳</div>
            <div className='card-lable'>Total Exdivenses</div>
            <div className='card-value'style={{color:"#ff6b8a"}}>&#8377;5000</div>
            <div className='card-sub'>2 transactions this month</div>
            <div className="card-bar">
              <div className="card-bar-fill" style={{width:"60%",background:"#ff6b8a"}}></div>
            </div>
          </div>
          <div className="summary-card" style={{"--card-accent":"var(--accent-glow)"}}>
            <div className='card-icon'style={{background:"var(--accent-glow)",color:"var(--accent2)"}}>🎯</div>
            <div className='card-lable'>Remaining Budget</div>
            <div className='card-value'style={{color:"var(--accent2)"}}>&#8377;5000</div>
            <div className='card-sub'>of 500 budget</div>
            <div className="card-bar">
              <div className="card-bar-fill" style={{width:"40%",background:"var(--accent"}}></div>
            </div>
          </div>
          <div className="summary-card" style={{"--card-accent":"var(--red-bg)"}}>
            <div className='card-icon'style={{background:"var(--red-bg)",color:"#ff6b8a"}}>📉</div>
            <div className='card-lable'>Net Savings</div>
            <div className='card-value'style={{color:"#ff6b8a"}}>&#8377;1100</div>
            <div className='card-sub'>deficit this month</div>
          </div>
        </div>
  )
}

export default SummaryCards