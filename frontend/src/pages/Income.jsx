import React, { useState } from "react";
import { CSVLink } from 'react-csv'
import { incomeHeaders, expenseHeaders, allTransactionHeaders } from "../utils/csvHeaders";
import "../styles/expense.css";
import "../styles/searchFilter.css";
import { useModal } from "../context/ModalContext";
import Modal from "../components/common/Modal";
import IncomeList from "../components/income/IncomeList";
import { useFinance } from "../context/FinanceContext";
import IncomeSearch from "../components/income/IncomeSearch";
import IncomeFilterChips from "../components/income/IncomeFilterChips";

function Income() {
  const { type, modal, openModal, closeModal } = useModal();
  const { incomes } = useFinance();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSrc, setSelectedSrc] = useState("All");

  const filteredItems = incomes.filter((income) => {
    const matcheSearch = income.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      income.source.toLowerCase().includes(searchTerm.toLowerCase());

    const matcheSource = selectedSrc === "All" || selectedSrc === income.source;

    return matcheSearch && matcheSource;
  })

  return (
    <main className="main">
      <header className="page-header">
        <div className="page-title">
          <div className="page-title">Income</div>
          <div className="page-subtitle">
            {incomes.length} income record logged
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <CSVLink data={incomes} headers={incomeHeaders} filename="Incomes.csv">
            <button className="btn btn-ghost">
              ⬇ CSV
            </button>
          </CSVLink>
          <button
            className="btn btn-success"
            onClick={() => openModal("income")}
          >
            + Add Income
          </button>
        </div>
      </header>

      <section className="card">
        <IncomeSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <IncomeFilterChips
          setSelectedSrc={setSelectedSrc}
        />
        <IncomeList
          filteredItems={filteredItems}
        />
      </section>

      <Modal type={type} isOpen={modal} onClose={closeModal} />
    </main>
  );
}

export default Income;
