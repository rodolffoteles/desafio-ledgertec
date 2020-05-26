import React from 'react';
import './Product.scss';

import Button from '../Button';
import { ReactComponent as TrashIcon } from './trash.svg';
import { ReactComponent as PencilIcon } from './pencil.svg';

const Product = ({ product, updateProductsList, showEditPanel }) => {

  const deleteProduct = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3001/products/${product.id}`, {
      method: 'DELETE'
    }).then(() => updateProductsList());
  }

  const editProduct = (event) => {
    event.preventDefault();
    showEditPanel(product);
  }

  return (
    <article className="product">
      <div>
        <p>{product.category}</p>
        {product.description}
      </div>

      <div className="actions">
        <Button className="btn-blue btn-outline" onClick={editProduct}>
          <PencilIcon/>
        </Button>
        
        <Button className="btn-red btn-outline" onClick={deleteProduct}>
          <TrashIcon/>
        </Button>
      </div>
    </article>
  );
};

export default Product;