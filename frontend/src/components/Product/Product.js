import React from 'react';
import './Product.scss';

import Button from '../Button';
import {ReactComponent as TrashIcon} from './trash.svg';

const Product = ({ product, fetchProducts }) => {

  const deleteProduct = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3001/products/${product.id}`, {
      method: 'DELETE'
    }).then(() => fetchProducts());
  }

  return (
    <article className="product">
      <div>
        <p>{product.Category.category}</p>
        {product.description}
      </div>

      <Button className="btn-red btn-outline" onClick={deleteProduct}>
        <TrashIcon/>
      </Button>
    </article>
  );
};

export default Product;