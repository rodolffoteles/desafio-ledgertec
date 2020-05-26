import React from 'react';
import './ProductList.scss';

import Product from '../Product';

const ProductList = ({ products, updateProductsList, showEditPanel }) => {
  return (
    <>
      {products.map(product => (
        <Product key={product.id}
                product={product}
                updateProductsList={updateProductsList}
                showEditPanel={showEditPanel}/>
      ))}
    </>
  );
};

export default ProductList;