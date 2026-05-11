import React, { useState } from 'react'
import "../styles/dashboard.css"
import SummaryCards from '../components/dashboard/SummaryCards'
import DashDoughnutChart from '../components/dashboard/DashDoughnutChart'
import DashBarChart from '../components/dashboard/DashBarChart'
import QuickBudget from '../components/dashboard/QuickBudget'
import RecentActivity from '../components/dashboard/RecentActivity'
import Modal from '../components/common/Modal'

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");

  return (
    <main className='main'>
      <header className='page-header'>
        <div className="page-title">
          <div className='page-title'>Good day! 👋</div>
          <div className="page-subtitle">Friday, 8 May 2026</div>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button className='btn btn-ghost' style={{ borderColor: 'rgba(56,217,169,0.3', color: 'var(--green)' }}
            onClick={() => {
              setType("income");
              setIsOpen(true);
            }}
          >
            + Add Income
          </button>
          <button className='btn btn-primary'
            onClick={() => {
              setType("expense");
              setIsOpen(true);
            }}
          >
            + Add Expense
          </button>
        </div>
      </header>

      <div>
        <SummaryCards />
      </div>

      <div className="two-col">
        <QuickBudget />
        <RecentActivity />
      </div>
      <div className="two-col">
        <DashDoughnutChart />
        <DashBarChart />
      </div>

    <Modal 
      type={type}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />

    </main>
  )
}

export default Dashboard