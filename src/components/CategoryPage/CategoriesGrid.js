import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryyCard";

const categories = [
  { image: "https://via.placeholder.com/300x200", title: "Men Clothes", items: 24 },
  { image: "https://via.placeholder.com/300x200", title: "Women Clothes", items: 12 },
  { image: "https://via.placeholder.com/300x200", title: "Accessories", items: 43 },
  { image: "https://via.placeholder.com/300x200", title: "Cotton Clothes", items: 31 },
  { image: "https://via.placeholder.com/300x200", title: "Summer Clothes", items: 26 },
  { image: "https://via.placeholder.com/300x200", title: "Wedding Clothes", items: 52 },
  { image: "https://via.placeholder.com/300x200", title: "Spring Collection", items: 24 },
  { image: "https://via.placeholder.com/300x200", title: "Casual Clothes", items: 52 },
  { image: "https://via.placeholder.com/300x200", title: "Hats", items: 26 },
];

const CategoriesGrid = () => {
  // Hook must be used inside the component
  const navigate = useNavigate();

  const handleEdit = (category) => {
    // Redirect to the edit page with category data
    navigate(`/categories/edit/${category.title}`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">
          + Add Category
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.title}
            items={category.items}
            onEdit={() => handleEdit(category)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;
