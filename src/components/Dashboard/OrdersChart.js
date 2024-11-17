import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const OrdersChart = () => {
  const data = {
    labels: ['4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'],
    datasets: [
      {
        label: 'May 21',
        data: [10, 15, 12, 20, 25, 30, 28, 35, 40, 42, 38, 45],
        borderColor: '#CBD5E1', // Light grey for May 21
        backgroundColor: '#CBD5E1',
        fill: false,
        tension: 0.4,
        pointBackgroundColor: '#CBD5E1',
        pointRadius: 6, // Larger radius for better visibility
        pointHoverRadius: 8, // Slightly larger on hover
        borderWidth: 4, // Thicker line to match design
      },
      {
        label: 'May 22',
        data: [12, 20, 15, 25, 34, 28, 32, 30, 42, 40, 35, 38],
        borderColor: '#3B82F6', // Blue for May 22
        backgroundColor: '#3B82F6',
        fill: false,
        tension: 0.4,
        pointBackgroundColor: '#3B82F6',
        pointRadius: 6, // Larger radius for better visibility
        pointHoverRadius: 8, // Slightly larger on hover
        borderWidth: 4, // Thicker line to match design
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: '#1F2937', // Dark tooltip background
        titleColor: '#FFF',
        bodyColor: '#FFF',
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 12 },
        borderColor: '#3B82F6', // Blue border for tooltip
        borderWidth: 1,
        padding: 10,
        callbacks: {
          label: (context) => `${context.raw} Orders`,
        },
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#4B5563', // Grey text for legend
          font: { size: 14, weight: '500' },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 50,
        grid: { color: '#E5E7EB' }, // Light grey grid
        ticks: { color: '#6B7280', font: { size: 12 } },
      },
      x: {
        grid: { display: false }, // Remove vertical grid lines
        ticks: { color: '#6B7280', font: { size: 12 } },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Orders Over Time</h2>
          <div className="flex items-baseline space-x-6">
            <div>
              <span className="block text-4xl font-bold text-gray-900">645</span>
              <span className="text-gray-500 text-sm">Orders on May 22</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-gray-900">472</span>
              <span className="text-gray-500 text-sm">Orders on May 21</span>
            </div>
          </div>
        </div>
        <select className="bg-gray-100 border border-gray-300 text-gray-700 text-sm px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Last 12 Hours</option>
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
        </select>
      </div>

      {/* Chart Section */}
      <div className="h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default OrdersChart;
