import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income';
import Expense from './pages/Expense';
import Budget from './pages/Budget';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='income' element={<Income/>} />
          <Route path='expense' element={<Expense/>} />
          <Route path='budget' element={<Budget/>} />
          <Route path='analytics' element={<Analytics/>} />
          <Route path='settings' element={<Settings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App