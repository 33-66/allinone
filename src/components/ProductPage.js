import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const navigate = useNavigate();

  const initialProducts = [
    { id: 1, name: "Men Grey Hoodie", category: "Hoodies", inventory: 96, color: "Black", price: 49.90, rating: 5.0, votes: 32, inStock: true },
    // ... other products
  ];

  const [products] = useState(initialProducts);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const productsPerPage = 10;

  // Filtered and Searched Products
  const filteredProducts = products.filter(
    (product) =>
      (filter === "All" || product.category === filter) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Toggle product selection
  const toggleProductSelection = (productId) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(productId)) {
        return prevSelectedProducts.filter((id) => id !== productId);
      } else {
        return [...prevSelectedProducts, productId];
      }
    });
  };

  return (
    <div className="products-page">
      <div className="header">
        <div className="filter-search">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="All">All Categories</option>
            <option value="Hoodies">Hoodies</option>
            <option value="T-Shirt">T-Shirts</option>
            {/* Add more categories as needed */}
          </select>

          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="action-buttons">
          <button className="export-btn">Export</button>
          <button
            className="add-product-btn"
            onClick={() => navigate('/product/addProduct')}
          >
            + Add Product
          </button>
        </div>
      </div>

      {selectedProducts.length > 0 && (
        <div className="bulk-actions">
          <button className="bulk-edit-btn">Edit</button>
          <button className="bulk-delete-btn">Delete</button>
        </div>
      )}

      <table className="products-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={(e) => setSelectedProducts(e.target.checked ? products.map(p => p.id) : [])}
              />
            </th>
            <th>Product</th>
            <th>Inventory</th>
            <th>Color</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id} className={product.inStock ? "" : "out-of-stock"}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => toggleProductSelection(product.id)}
                />
              </td>
              <td>
                <div className="product-info">
                  <img src="placeholder.jpg" alt={product.name} className="product-image" />
                  <div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-category">{product.category}</p>
                  </div>
                </div>
              </td>
              <td>{product.inventory} in stock</td>
              <td>{product.color}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.rating} ({product.votes} Votes)</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <div className="pagination">
          {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map((number) => (
            <button
              key={number + 1}
              className={`page-btn ${currentPage === number + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(number + 1)}
            >
              {number + 1}
            </button>
          ))}
        </div>
        <div className="product-count">
          Total Products: {filteredProducts.length}
        </div>
      </div>
    </div>
  );
};

export default Products;
