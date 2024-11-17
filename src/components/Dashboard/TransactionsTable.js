import React from 'react';

const RecentTransactions = () => {
  const transactions = [
    {
      name: 'Jagarnath S.',
      date: '24.05.2023',
      amount: '$124.97',
      status: 'Paid',
    },
    {
      name: 'Anand G.',
      date: '23.05.2023',
      amount: '$55.42',
      status: 'Pending',
    },
    {
      name: 'Kartik S.',
      date: '23.05.2023',
      amount: '$89.90',
      status: 'Paid',
    },
    {
      name: 'Rakesh S.',
      date: '22.05.2023',
      amount: '$144.94',
      status: 'Pending',
    },
    {
      name: 'Anup S.',
      date: '22.05.2023',
      amount: '$70.52',
      status: 'Paid',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Transactions</h2>

      {/* Table */}
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="pb-2">Name</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-t text-gray-800">
              <td className="py-3 font-semibold">{transaction.name}</td>
              <td className="py-3">{transaction.date}</td>
              <td className="py-3 font-semibold">{transaction.amount}</td>
              <td className="py-3">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    transaction.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
