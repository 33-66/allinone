// help  me   upgrade  this  to  the max,modern,beautify  and sophisticate  it
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const Last7DaysSales = () => {
  // Data for the bar chart
  const data = {
    labels: ['12', '13', '14', '15', '16', '17', '18'],
    datasets: [
      {
        label: 'Revenue',
        data: [1800, 2200, 2400, 2525, 2100, 2300, 2600], // Sample data for each day
        backgroundColor: '#22C55E', // green for the bars
        borderRadius: 5,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: '#1F2937', // Dark background for tooltip
        titleColor: '#FFF',
        bodyColor: '#FFF',
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 12 },
        borderColor: '#22C55E',
        borderWidth: 1,
        padding: 10,
        callbacks: {
          label: (context) => `$${context.raw}`, // Show dollar amount on tooltip
        },
      },
      legend: { display: false }, // Hides the default legend
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#E5E7EB' },
        ticks: { color: '#6B7280', font: { size: 12 }, callback: (value) => `$${value}` },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#6B7280', font: { size: 12 } },
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Last 7 Days Sales</h2>
        <div className="mt-4 text-sm text-gray-600">
          <p className="font-semibold text-gray-800">
            <span className="text-3xl text-gray-900">1,259</span> Items Sold
          </p>
          <p className="font-semibold text-gray-800">
            <span className="text-3xl text-gray-900">$12,546</span> Revenue
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Last7DaysSales;