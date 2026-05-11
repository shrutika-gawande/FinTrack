import React, { useState } from "react";
import "../../styles/form.css";

function IncomeForm() {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    source: "salary",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

   const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div className="field form-full">
        <label>title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          type="text"
          placeholder="e.g. Monthly Salary"
        />
      </div>
      <div className="field">
        <label>amount (&#8377;)</label>
        <input
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          type="number"
          placeholder="0.00"
        />
      </div>
      <div className="field">
        <label>date</label>
        <input
          name="date"
          value={formData.date}
          onChange={handleChange}
          type="date"
          placeholder="e.g. Lunch at cafe"
        />
      </div>
      <div className="field form-full">
        <label>source</label>
        <select 
          name="source" 
          value={formData.source} 
          onChange={handleChange}
        >
          <option value="salary">💼 Salary</option>
          <option value="freelance">💻 Freelance</option>
          <option value="business">🏢 Business</option>
          <option value="investment">📈 Investment</option>
          <option value="rental">🏠 Rental</option>
          <option value="gift">🎁 Gift</option>
          <option value="other">💰 Other</option>
        </select>
      </div>
      <div className="field form-full">
        <label>note (optional)</label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="Any additional note..."
        />
      </div>
      <button
        className="btn btn-primary"
        style={{
          display: "block",
          width: "100%",
          background: "var(--green)",
          boxShadow: "0 4px 16px rgba(56,217,169,0.3)",
          marginTop: "10px",
        }}
      >
        Add Income
      </button>
    </form>
  );
}

export default IncomeForm;
