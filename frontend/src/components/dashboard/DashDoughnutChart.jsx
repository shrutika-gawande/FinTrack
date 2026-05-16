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
      legend: {
      position: 'right',
      labels: {
        usePointStyle: false,
        boxWidth: 12,
        boxHeight: 12,
      }
    },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ₹${ctx.parsed}`
        }
      }
    }
  }
  
    // Group expenses by category and sum amounts
  const grouped = expenses.reduce((acc, e) => {
    const cat = e.category;
    acc[cat] = (acc[cat] || 0) + Number(e.amount);
    return acc;
  }, {});

  const categories = Object.keys(grouped);
  const amounts = Object.values(grouped);

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Spending',
        data: amounts,
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
