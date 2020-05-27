import React from 'react';
import './ProductList.scss';
import { Link, useLocation } from 'react-router-dom';
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
  
  const closeIcon = '\u2715';

  return (
    <div>
      {category && 
        <p className="selected-category">
          {category} category products

          <Link to="/products" className="close-button">{closeIcon}</Link>
        </p>}

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