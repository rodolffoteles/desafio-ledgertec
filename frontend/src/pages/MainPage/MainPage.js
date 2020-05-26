import React, { useState, useCallback } from 'react';
import './MainPage.scss';

import SidePanel from '../../components/SidePanel';
import ProductList from '../../components/ProductList';

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const fetchProducts = useCallback(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => setError(true))
  }, [setProducts, setError]);

  return (
    <main>
      <SidePanel fetchProducts={fetchProducts}/>
      <ProductList fetchProducts={fetchProducts} products={products} error={error}/>
    </main>
  )
};

export default MainPage;