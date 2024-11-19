import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryyCard";
import AddCategoryModal from "./AddProductPage/AddCategoryModal";

const initialCategories = [
  { image: "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Men Clothes", items: 24 },
  { image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Women Clothes", items: 12 },
  { image: "https://via.placeholder.com/300x200", title: "Accessories", items: 43 },
  { image: "https://via.placeholder.com/300x200", title: "Cotton Clothes", items: 31 },
];

const CategoriesGrid = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(initialCategories);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEdit = (category) => {
    navigate(`/categories/edit/${category.title}`);
  };

  const handleAddCategory = (newCategory) => {
    const newCategoryObj = {
      image: "https://via.placeholder.com/300x200", // Placeholder image for simplicity
      title: newCategory.categoryName,
      items: Math.floor(Math.random() * 50) + 1, // Random number of items
    };
    setCategories([...categories, newCategoryObj]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
        >
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
      <AddCategoryModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddCategory}
      />
    </div>
  );
};

export default CategoriesGrid;
