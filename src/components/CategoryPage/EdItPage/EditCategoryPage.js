import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryForm from "./ CategoryForm";
import ProductList from "./ ProductList";

const EditCategoryPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/categories");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium text-sm transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        <h1 className="text-xl font-bold text-gray-800">Edit Category</h1>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Product List */}
        <section className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
         
          <ProductList />
        </section>

        {/* Right Section: Category Form */}
        <aside className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Category Info
          </h2>
          <CategoryForm />
        </aside>
      </div>

      {/* Footer */}
      <footer className="flex justify-end mt-8 space-x-4">
        <button
          onClick={() => alert("Changes canceled!")}
          className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          onClick={() => alert("Changes saved!")}
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Save
        </button>
      </footer>
    </div>
  );
};

export default EditCategoryPage;
