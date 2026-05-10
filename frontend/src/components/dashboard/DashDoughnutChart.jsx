import React from "react";

function DashDoughnutChart() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">📈 Spending by Category</div>
      </div>
      <div className="chart-wrap">
        <canvas id="dashDoughnut"></canvas>
      </div>
    </div>
  );
}

export default DashDoughnutChart;
