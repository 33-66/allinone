import React, { useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const products = [
  { id: 1, name: "Women Striped T-Shirt", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Women White T-Shirt", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Women Black Dress", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Women Striped T-Shirt", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Women White T-Shirt", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Women Black Dress", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Women Striped T-Shirt", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Women White T-Shirt", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Women Black Dress", image: "https://via.placeholder.com/150" },
];

const ProductList = () => {
  const handleEdit = (id) => {
    console.log(`Editing product with ID: ${id}`);
    alert(`Edit product with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting product with ID: ${id}`);
    alert(`Delete product with ID: ${id}`);
  };

  useEffect(() => {
    console.log("Product list component mounted");
  }, []);

  return (
    <div>
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Products ({products.length})</h2>

      {/* Product List */}
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
          >
            {/* Product Details */}
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <span className="font-medium text-gray-800">{product.name}</span>
            </div>

            {/* Action Buttons (Edit & Delete) */}
            <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleEdit(product.id)}
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <FaEdit className="mr-1" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="text-red-500 hover:text-red-700 flex items-center"
              >
                <FaTrashAlt className="mr-1" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Product Button */}
      <button className="mt-6 w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">
        + Add Product
      </button>
    </div>
  );
};

export default ProductList;