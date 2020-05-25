import React from 'react';
import './Product.scss';

import {ReactComponent as TrashIcon} from './trash.svg';

const Product = ({ description, category }) => {
  return (
    <article className="product">
      <div>
        <p>{category}</p>
        {description}
      </div>

      <button><TrashIcon/></button>
    </article>
  );
};

export default Product;