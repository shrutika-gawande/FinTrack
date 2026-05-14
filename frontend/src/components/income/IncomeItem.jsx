import React from 'react'

function IncomeItem({ income }) {

    const sourceIcons = {
        Salary: "💼",
        Freelance: "💻",
        Business: "🏢",
        Investment: "📈",
        Rental: "🏠",
        Gift: "🎁",
        Other: "💰"
    };

    return (
        <div className="expense-item">
            <div className="expense-icon" style={{ background: '#a0aec022', color: '#a0aec0' }}>{sourceIcons[income.source]}</div>
            <div className="expense-info">
                <div className="expense-title">{income.title}</div>
                <div className="expense-meta">{income.source} • {income.date}</div>
            </div>
            <div className="expense-amount" style={{ color: 'var(--green)' }}>&#8377;{income.amount}</div>
        </div>
    )
}

export default IncomeItem