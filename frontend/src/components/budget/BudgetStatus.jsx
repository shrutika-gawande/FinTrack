import React from 'react'
import BudgetMeter from './BudgetMeter'
import { useFinance } from '../../context/FinanceContext'

function BudgetStatus() {
    const { budget, remainingBudget, totalExpense,  rawPercentage,  displayPercentage } = useFinance();

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title">📊 This Month's Status</div>
            </div>
            <div id="budgetStatus">
                {budget === 0 ? (
                    <div className="empty">
                        <div className="empty-icon">🎯</div>
                        <div className="empty-title">Set a budget first</div>
                    </div>
                ) : (
                    <>
                        <div style={{ textAlign: "center", padding: "10px 0 16px" }}>
                            <div style={{ fontSize: "38px", fontWeight: "800", fontFamily: "var(--mono)", color: rawPercentage > 100 ? 'var(--red)' : '#38d9a9' }}>
                                {displayPercentage}%
                            </div>
                            <div style={{ fontSize: "13px", color: "var(--text2)", marginTop: "4px" }}>of budget used</div>
                        </div>

                        <BudgetMeter percentage={rawPercentage} />

                        <div className="budget-labels" style={{ marginTop: "8px" }}>
                            <span>Spent: &#8377;{totalExpense}</span>
                            <span>Budget: &#8377;{budget}</span>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "16px" }}>
                            <div className="spent-container">
                                <div className="spent">spent</div>
                                <div className="spent-amount">&#8377;{totalExpense}</div>
                            </div>
                            <div className="remain-container">
                                <div className="remain">remaining</div>
                                <div className="remain-amount">&#8377;{remainingBudget < 0 ? 0 : remainingBudget}</div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default BudgetStatus