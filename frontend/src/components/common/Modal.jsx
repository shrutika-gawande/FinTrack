import React from 'react'
import "../../styles/modal.css"
import IncomeForm from '../income/IncomeForm';
import ExpenseForm from '../expenses/ExpenseForm';

function Modal({ type, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title">{type === "income" ? "+ Add Income" : "+ Add Expense"}</div>
                    <div className="close-btn" onClick={onClose}>✕</div>
                </div>
                <div >{type === "income" ? <IncomeForm onClose={onClose} /> : <ExpenseForm onClose={onClose} />}</div>
            </div>
        </div>

    )
}

export default Modal