// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import ProductsPage from './components/ProductPage';
import AddProduct from './components/AddProduct';
import CategoryPage from './components/CategoryPage/CategoryPage';
import EditCategoryPage from './components/CategoryPage/EdItPage/EditCategoryPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path ="/products" element={<ProductsPage/>}/>
          <Route path='product/addProduct' element={<AddProduct/>} />
          <Route path='/categories' element={<CategoryPage/>}/>
          <Route path="/categories/edit/:categoryId" element={<EditCategoryPage />} />
          {/* Add more routes for other pages here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
