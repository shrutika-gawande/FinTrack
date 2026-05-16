import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useFinance } from "../../context/FinanceContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getLastSevenDays() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - 6 + i);
    return d;
  });
}

function sumByDay(items, days) {
  return days.map(day =>
    items
      .filter(item => {
        const d = new Date(item.date);
        return d.toDateString() === day.toDateString();
      })
      .reduce((sum, item) => sum + Number(item.amount), 0)
  );
}

function DashBarChart() {
  const { incomes, expenses } = useFinance();

  const last7Days = getLastSevenDays();
  const labels = last7Days.map(d => DAYS[d.getDay()]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: sumByDay(incomes, last7Days),
        backgroundColor: 'rgba(56, 217, 169, 0.6)',
      },
      {
        label: 'Expense',
        data: sumByDay(expenses, last7Days),
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
      position: 'top',
      labels: {
        usePointStyle: false,
        boxWidth: 12,
        boxHeight: 12,
      }
    },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ₹${ctx.parsed.y}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `₹${value}`
        }
      }
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">📅 Daily Spending (Last 7 Days)</div>
      </div>
      <div className="chart-wrap">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default DashBarChart;