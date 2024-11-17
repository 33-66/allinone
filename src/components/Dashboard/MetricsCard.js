import React from 'react';

const MetricsCard = ({ label, value, percentage, increase }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
      <div className="text-gray-500 text-sm">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className={`text-sm ${increase ? 'text-green-500' : 'text-red-500'}`}>
        {percentage}% {increase ? '↑' : '↓'}
      </div>
    </div>
  );
};

export default MetricsCard;
