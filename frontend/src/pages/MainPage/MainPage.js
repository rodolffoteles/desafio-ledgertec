import React, { useState, useCallback } from 'react';
import './MainPage.scss';


import SidePanel from '../../components/SidePanel';
import ProductList from '../../components/ProductList';
import EditPanel from '../../components/EditPanel';

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [productInEdition, setProductInEdition] = useState(false);

  const updateProductsList = useCallback(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => setError(true))
  }, [setProducts, setError]);

  const showEditPanel = (product) => setProductInEdition(product);
  const closeEditPanel = () => setProductInEdition(false);

  return (
    <main>
      <SidePanel updateProductsList={updateProductsList}/>
      <ProductList 
        products={products} 
        error={error} 
        updateProductsList={updateProductsList}
        showEditPanel={showEditPanel}/>

      {productInEdition && 
        <EditPanel
          key={productInEdition.id}
          product={productInEdition}
          updateProductsList={updateProductsList}
          closeEditPanel={closeEditPanel}/>}
    </main>
  )
};

export default MainPage;