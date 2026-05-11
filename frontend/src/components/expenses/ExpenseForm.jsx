import React, { useState } from 'react'
import "../../styles/form.css"

function ExpenseForm() {

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "food",
    note: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
  }

  return (

    <form className='form-grid' onSubmit={handleSubmit}>

      <div className="field form-full">
        <label>Title</label>

        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
          placeholder='e.g. Lunch at cafe'
        />
      </div>

      <div className="field">
        <label>Amount (&#8377;)</label>

        <input
          type='number'
          name='amount'
          value={formData.amount}
          onChange={handleChange}
          placeholder='0.00'
        />
      </div>

      <div className="field">
        <label>Date</label>

        <input
          type='date'
          name='date'
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="field form-full">
        <label>Category</label>

        <select
          name='category'
          value={formData.category}
          onChange={handleChange}
        >

          <option value="">Select Category</option>

          <option value="food">
            🍔 Food & Dining
          </option>

          <option value="shopping">
            🛍️ Shopping
          </option>

          <option value="travel">
            ✈️ Travel
          </option>

          <option value="entertainment">
            🎮 Entertainment
          </option>

          <option value="health">
            💊 Health
          </option>

          <option value="utilities">
            ⚡ Utilities
          </option>

          <option value="education">
            📚 Education
          </option>

          <option value="other">
            📦 Other
          </option>

        </select>
      </div>

      <div className="field form-full">
        <label>Note (Optional)</label>

        <textarea
          name='note'
          value={formData.note}
          onChange={handleChange}
          placeholder='Any additional note...'
          rows="4"
        />
      </div>

      <button
        type='submit'
        className='btn btn-primary'
        style={{
          display: 'block',
          width: '100%',
          marginTop: '10px'
        }}
      >
        Add Expense
      </button>

    </form>
  )
}

export default ExpenseForm