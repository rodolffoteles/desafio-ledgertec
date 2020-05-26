import React from 'react';
import './ProductList.scss';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import Product from '../Product';

const ProductList = ({ products, updateProductsList, showEditPanel }) => {
  // Parse query parameters to get the selected category
  const { search } = useLocation();
  const { category } = parse(search);

  // If there's one category selected, only show the products from this category 
  let productsToList = products;
  if (category) {
    productsToList = products.filter(product => 
      product.category === category
    );
  }
  
  return (
    <div>
      {category && 
        <p className="selected-category">{category} category products</p>}

      {productsToList.map(product => (
        <Product key={product.id}
                product={product}
                updateProductsList={updateProductsList}
                showEditPanel={showEditPanel}/>
      ))}
    </div>
  );
};

export default ProductList;