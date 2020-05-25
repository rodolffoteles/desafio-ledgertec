import React, { useEffect, useState } from 'react';
import './ProductList.scss';

import Product from '../Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
      .catch(err => setError(err));
  }, []);

  return (
    <div className="product-list">
      <header>
        <h3>Products list</h3>
      </header>

      {products.map(product => {
        return <Product key={product.id} 
                        description={product.description} 
                        category={product.Category.category}/>
      })}

    </div>
  );
};

export default ProductList;