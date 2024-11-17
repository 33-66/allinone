import React from 'react';

const TopProducts = () => {
  const products = [
    {
      name: 'Men Grey Hoodie',
      price: '$49.90',
      unitsSold: 204,
      productImg: 'https://via.placeholder.com/40', // Replace with actual product image URL
    },
    {
      name: 'Women Striped T-Shirt',
      price: '$34.90',
      unitsSold: 155,
      productImg: 'https://via.placeholder.com/40', // Replace with actual product image URL
    },
    {
      name: 'Women White T-Shirt',
      price: '$40.90',
      unitsSold: 120,
      productImg: 'https://via.placeholder.com/40', // Replace with actual product image URL
    },
    {
      name: 'Men White T-Shirt',
      price: '$49.90',
      unitsSold: 204,
      productImg: 'https://via.placeholder.com/40', // Replace with actual product image URL
    },
    {
      name: 'Women Red T-Shirt',
      price: '$34.90',
      unitsSold: 155,
      productImg: 'https://via.placeholder.com/40', // Replace with actual product image URL
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Top Products by Units Sold</h2>

      {/* Table */}
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="pb-2">Name</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Units Sold</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-t text-gray-800">
              <td className="py-3 flex items-center space-x-3">
                <img
                  src={product.productImg}
                  alt={product.name}
                  className="w-10 h-10 rounded-md"
                />
                <span className="font-semibold">{product.name}</span>
              </td>
              <td className="py-3">{product.price}</td>
              <td className="py-3">{product.unitsSold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;
