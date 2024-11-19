import React, { useState } from "react";

const AddCategoryModal = ({ isOpen, onClose, onSubmit }) => {
  const [categoryName, setCategoryName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!categoryName) {
      alert("Please enter a category name.");
      return;
    }
    onSubmit({ categoryName, selectedProduct });
    setCategoryName("");
    setSelectedProduct("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-[540px]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">Add Category</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>
        <div className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category Name</label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter category name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Add Products</label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Choose a Product</option>
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
              <option value="Product 3">Product 3</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="text-blue-500 hover:underline font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Create Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
