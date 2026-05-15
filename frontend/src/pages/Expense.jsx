import React, { useState } from 'react'
import { useModal } from '../context/ModalContext'
import "../styles/expense.css"
import "../styles/searchFilter.css"
import Modal from '../components/common/Modal';
import ExpenseList from '../components/expenses/ExpenseList';
import { useFinance } from '../context/FinanceContext';
import ExpenseSearch from '../components/expenses/ExpenseSearch';
import ExpenseFilterChips from '../components/expenses/ExpenseFilterChips';

function Expense() {

  const {type, modal, openModal, closeModal} = useModal();
  const {expenses} = useFinance();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredItems = expenses.filter((expense) => {
    const matchesSearch = expense.title.toLowerCase().includes(searchTerm.toLowerCase()) || expense.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCat = selectedCat === "All" || expense.category === selectedCat;

    return matchesSearch && matchesCat;
  })
  
  return (
    <main className='main'>
      <header className='page-header'>
        <div className="page-title">
          <div className='page-title'>Expenses</div>
          <div className="page-subtitle">{expenses.length} expenses recorded</div>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button className='btn btn-ghost'>
            CSV
          </button>
          <button className='btn btn-primary'
            onClick={() => openModal("expense")}
          >
            + Add Expense
          </button>
        </div>
      </header>

      <section className='card'>
        <ExpenseSearch 
          searchTerm = {searchTerm}
          setSearchTerm = {setSearchTerm}
        />
        <ExpenseFilterChips 
          setSelectedCat = {setSelectedCat}
        />
        <ExpenseList 
          filteredItems = {filteredItems}
        />
      </section>

      <Modal
        type={type}
        isOpen={modal}
        onClose={closeModal}
      />
    </main>
  )
}

export default Expense