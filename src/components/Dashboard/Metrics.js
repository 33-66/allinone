import React from 'react';
import MetricsCard from './MetricsCard';

const Metrics = () => {
  const metrics = [
    { label: "Total Revenue", value: "$10.54k", percentage: "22.45", increase: true },
    { label: "New Users", value: "1,056", percentage: "15.34", increase: true },
    { label: "Unique Visits", value: "5,420", percentage: "10.24", increase: false },
    { label: "Existing Users", value: "9,653", percentage: "22.45", increase: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <MetricsCard 
          key={index} 
          label={metric.label} 
          value={metric.value} 
          percentage={metric.percentage} 
          increase={metric.increase} 
        />
      ))}
    </div>
  );
};

export default Metrics;
