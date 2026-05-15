import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useFinance } from "../../context/FinanceContext";


ChartJS.register(ArcElement, Tooltip, Legend);


function DashDoughnutChart() {
  const { expenses } = useFinance();
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      tooltip: {
        callbacks: {
          label: (ctx) => ` ₹${ctx.parsed}`
        }
      }
    }
  }
  const data = {
    labels: expenses.map((e) => e.category),
    datasets: [
      {
        label: 'Spending',
        data: expenses.map((e) => Number(e.amount)),
        backgroundColor: [
          'rgba(56, 217, 169, 0.6)',
          'rgba(99, 102, 241, 0.6)',
          'rgba(251, 191, 36, 0.6)',
          'rgba(239, 68, 68, 0.6)',
          'rgba(59, 130, 246, 0.6)',
        ],
        borderColor: 'transparent',
        hoverOffset: 6,
      },
    ],
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">📈 Spending by Category</div>
      </div>
      <div className="chart-wrap">
        {expenses.length === 0
          ? <p style={{ color: '#a0aec0', textAlign: 'center' }}>No expense data yet.</p>
          : <Doughnut data={data} options={options} />
        }
      </div>
    </div>
  );
}

export default DashDoughnutChart;
