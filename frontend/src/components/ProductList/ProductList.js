import React, { useEffect } from 'react';
import './ProductList.scss';

import Product from '../Product';

const ProductList = ({ error, products, fetchProducts }) => { 
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const productsList = products.map(product => 
    <Product key={product.id} 
            product={product}
            fetchProducts={fetchProducts}/>
  );

  return (
    <div className="product-list">
      <header>
        <h3>Products list</h3>
      </header>

      <div className="scrollable">
        {error 
          ? <div className="alert">Could not load the products, please refresh the page</div>
          : productsList
        }
      </div>

    </div>
  );
};

export default ProductList;