import React from "react";
import "../styles/settings.css"
import toast from 'react-hot-toast';
import { useFinance } from "../context/FinanceContext";

function Settings() {
  const { clearAll } = useFinance();

  const handleClick = () => {
    clearAll(),
    toast.success("Data cleared!");
  }

  return (
    <div className="main">
      <div className="page-header">
        <div>
          <div className="page-title">Settings</div>
          <div className="page-subtitle">Customize your FinFlow experience</div>
        </div>
      </div>

      <div className="card">

        <div className="settings-section">
          <div className="settings-title">Appearance</div>
          <div className="settings-item">
            <div>
              <div className="settings-label">Theme</div>
              <div className="settings-desc">Switch between dark and light mode</div>
            </div>
            <button className="btn btn-ghost btn-sm">Toggle</button>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-title">Data Management</div>
          <div className="settings-item">
            <div>
              <div className="settings-label">Export to CSV</div>
              <div className="settings-desc">Download all expenses as a CSV file</div>
            </div>
            <button className="btn btn-ghost btn-sm">Export</button>
          </div>
          <div className="settings-item">
            <div>
              <div className="settings-label">Clear All Data</div>
              <div className="settings-desc">Permanently delete all expenses and budget</div>
            </div>
            <button className="btn btn-danger btn-sm" onClick={handleClick}>Clear</button>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-title">About</div>
          <div className="settings-item">
            <div>
              <div className="settings-label">FinTrack v1.0</div>
              <div className="settings-desc">Personal Finance Tracker — FinTrack</div>
            </div>
            <span style={{ color: 'var(--text3)', fontSize: '12px', fontFamily: 'var(--mono)' }}>{new Date().getFullYear()}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Settings;
