import React from "react";

const CategoryCard = ({ image, title, items, onEdit }) => {
  return (
    <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Card Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Edit Icon (Appears on Hover) */}
      <button
        onClick={onEdit}
        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors">
          ✏️ Edit
        </span>
      </button>

      {/* Card Footer */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm">{items} items</p>
      </div>
    </div>
  );
};

export default CategoryCard;
