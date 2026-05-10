import React from "react";

function DashBarChart() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">📅 Daily Spending (Last 7 Days)</div>
      </div>
      <div className="chart-wrap">
        <canvas id="dashBar"></canvas>
      </div>
    </div>
  );
}

export default DashBarChart;
