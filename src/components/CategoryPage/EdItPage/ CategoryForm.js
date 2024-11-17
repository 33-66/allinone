import React, { useState } from "react";

const CategoryForm = () => {
  const [visible, setVisible] = useState(true);
  const [categoryName, setCategoryName] = useState("Women Clothes");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      alert(`File uploaded: ${file.name}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-8 text-gray-900 text-center">
        Edit Category
      </h2>

      {/* Visibility Toggle */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-700">
          Category Visibility
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={visible}
            onChange={() => setVisible(!visible)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-all">
            <div
              className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 left-0.5 transition-transform ${
                visible ? "translate-x-5" : ""
              }`}
            ></div>
          </div>
        </label>
      </div>

      {/* Category Name */}
      <div className="mb-6">
        <label
          htmlFor="category-name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Category Name
        </label>
        <input
          id="category-name"
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          placeholder="Enter category name"
        />
      </div>

      {/* File Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category Image
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center relative">
          {uploadedFile ? (
            <img
              src={URL.createObjectURL(uploadedFile)}
              alt="Uploaded Preview"
              className="w-32 h-32 object-cover mx-auto mb-4 rounded-full"
            />
          ) : (
            <div className="text-gray-500 text-sm">
              Drag & drop or click to upload an image
            </div>
          )}
          <input
            type="file"
            id="file-upload"
            onChange={handleFileUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Supported formats: JPG, PNG
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => alert("Changes canceled!")}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          onClick={() => alert("Category saved!")}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CategoryForm;
