import React from 'react';
import Metrics from './Metrics';
import OrdersChart from './OrdersChart';
import TransactionsTable from './TransactionsTable';
import TopProductsTable from './TopProductsTable';
import Last7DaysSales from './Last7DaysSales';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <Metrics />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <OrdersChart />
        </div>
        <div>
        <Last7DaysSales/>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TransactionsTable />
        <TopProductsTable />
      </div>
    </div>
  );
};

export default Dashboard;
