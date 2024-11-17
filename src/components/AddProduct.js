import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [isTaxable, setIsTaxable] = useState(false);
  const [hasOptions, setHasOptions] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [tags, setTags] = useState(["T-Shirt", "Men Clothes", "Summer Collection"]);
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="p-6 lg:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-md shadow-md">
      <button
          className="text-blue-600 font-medium mb-6"
          onClick={() => navigate("/products")} // Navigate to /products page
        >
          &larr; Back
        </button>
        <h1 className="text-2xl font-semibold mb-6">Add Product</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Information */}
            <div>
              <h2 className="text-lg font-medium mb-4">Information</h2>
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 mb-4"
              />
              <textarea
                placeholder="Product Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 mb-4 h-24"
              />
            </div>

            {/* Images */}
            <div>
              <h2 className="text-lg font-medium mb-4">Images</h2>
              <div className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center">
                <button className="text-blue-600 font-medium">Add File</button>
                <p className="text-gray-500">Or drag and drop files</p>
              </div>
            </div>

            {/* Price */}
            <div>
              <h2 className="text-lg font-medium mb-4">Price</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter price"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="border border-gray-300 rounded-md p-3"
                />
                <input
                  type="text"
                  placeholder="Price at Discount"
                  value={discountPrice}
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  className="border border-gray-300 rounded-md p-3"
                />
              </div>
              <label className="flex items-center mt-4">
                <input
                  type="checkbox"
                  checked={isTaxable}
                  onChange={() => setIsTaxable(!isTaxable)}
                  className="mr-2"
                />
                Add tax for this product
              </label>
            </div>

            {/* Different Options */}
            <div>
              <h2 className="text-lg font-medium mb-4">Different Options</h2>
              <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={hasOptions}
                  onChange={() => setHasOptions(!hasOptions)}
                  className="mr-2"
                />
                This product has multiple options
              </label>
              {hasOptions && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <select className="border border-gray-300 rounded-md p-3">
                      <option>Size</option>
                      <option>Color</option>
                      {/* Add more options */}
                    </select>
                    <div className="flex space-x-2">
                      {["S", "M", "L", "XL"].map((size) => (
                        <button
                          key={size}
                          className="border border-gray-300 px-2 py-1 rounded-md text-sm"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button className="text-blue-600 font-medium">Add More</button>
                </div>
              )}
            </div>

            {/* Shipping */}
            <div>
              <h2 className="text-lg font-medium mb-4">Shipping</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter Weight"
                  className="border border-gray-300 rounded-md p-3"
                />
                <select className="border border-gray-300 rounded-md p-3">
                  <option>Select Country</option>
                  {/* Add country options */}
                </select>
              </div>
              <label className="flex items-center mt-4">
                <input type="checkbox" className="mr-2" />
                This is a digital item
              </label>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h2 className="text-lg font-medium mb-4">Categories</h2>
              {["Women", "Men", "T-Shirt", "Hoodie", "Dress"].map((category) => (
                <label key={category} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
              <button className="text-blue-600 font-medium mt-2">Create New</button>
            </div>

            {/* Tags */}
            <div>
              <h2 className="text-lg font-medium mb-4">Tags</h2>
              <input
                type="text"
                placeholder="Enter tag name"
                className="w-full border border-gray-300 rounded-md p-3 mb-2"
              />
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 px-2 py-1 rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* SEO Settings */}
            <div>
              <h2 className="text-lg font-medium mb-4">SEO Settings</h2>
              <input
                type="text"
                placeholder="Title"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 mb-4"
              />
              <textarea
                placeholder="Description"
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 h-24"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button className="px-4 py-2 border border-gray-300 rounded-md">Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
